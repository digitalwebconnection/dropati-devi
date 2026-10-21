import { describe, it, expect, vi, beforeEach } from "vitest";
import { submitInterestEnquiry } from "./contactService";

describe("contactService - submitInterestEnquiry", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("silently accepts bot submissions without calling the API (honeypot trap)", async () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch");

    const result = await submitInterestEnquiry({
      name: "Bot User",
      email: "bot@spam.com",
      botcheck: true,
    });

    expect(result.success).toBe(true);
    expect(result.message).toContain("recorded");
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it("submits valid enquiry data successfully", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true, message: "Enquiry submitted successfully" }),
    });

    const result = await submitInterestEnquiry({
      name: "Jane Doe",
      email: "jane@example.com",
      phone: "+91 98765 43210",
      interestType: "I'd like to volunteer",
      message: "I want to help with teaching crafts.",
      botcheck: false,
    });

    expect(result.success).toBe(true);
    expect(result.message).toBe("Enquiry submitted successfully");
  });

  it("throws a descriptive error when API returns an error response", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce({
      ok: false,
      json: async () => ({ success: false, message: "Invalid access key" }),
    });

    await expect(
      submitInterestEnquiry({
        name: "Jane Doe",
        email: "jane@example.com",
        interestType: "General enquiry",
        botcheck: false,
      })
    ).rejects.toThrow("Invalid access key");
  });

  it("strips newline and carriage return characters from single-line fields to prevent header injection", async () => {
    let capturedBody = null;
    vi.spyOn(globalThis, "fetch").mockImplementationOnce(async (_url, options) => {
      capturedBody = JSON.parse(options.body);
      return {
        ok: true,
        json: async () => ({ success: true, message: "Enquiry submitted successfully" }),
      };
    });

    await submitInterestEnquiry({
      name: "Attacker\r\nBcc: evil@victim.com",
      email: "attacker@domain.com\nCc: spam@victim.com",
      phone: "+91 99999 99999\r\nInjected-Header: test",
      interestType: "Volunteer\nInjected",
      message: "Valid multi-line\nmessage is allowed here.",
      botcheck: false,
    });

    expect(capturedBody).not.toBeNull();
    expect(capturedBody.name).toBe("Attacker Bcc: evil@victim.com");
    expect(capturedBody.email).toBe("attacker@domain.com Cc: spam@victim.com");
    expect(capturedBody.phone).toBe("+91 99999 99999 Injected-Header: test");
    expect(capturedBody.interest_type).toBe("Volunteer Injected");
    expect(capturedBody.subject).not.toContain("\r");
    expect(capturedBody.subject).not.toContain("\n");
    // Multi-line message preserves intended paragraph breaks
    expect(capturedBody.message).toBe("Valid multi-line\nmessage is allowed here.");
  });
});
