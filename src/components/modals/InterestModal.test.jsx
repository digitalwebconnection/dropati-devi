import { describe, it, expect } from "vitest";
import { validateInterestForm, NAME_REGEX, EMAIL_REGEX, PHONE_REGEX } from "@/utils";

describe("InterestModal Form Validation & Regex", () => {
  describe("Regex Tests", () => {
    it("validates valid names with NAME_REGEX", () => {
      expect(NAME_REGEX.test("Dropati Devi")).toBe(true);
      expect(NAME_REGEX.test("Ananya Sharma")).toBe(true);
      expect(NAME_REGEX.test("Jean-Pierre O'Connor")).toBe(true);
      expect(NAME_REGEX.test("A")).toBe(false); // too short
      expect(NAME_REGEX.test("User123")).toBe(false); // numbers rejected
      expect(NAME_REGEX.test("<script>alert(1)</script>")).toBe(false); // XSS rejected
    });

    it("validates valid RFC emails with EMAIL_REGEX", () => {
      expect(EMAIL_REGEX.test("user@example.com")).toBe(true);
      expect(EMAIL_REGEX.test("foundation.enquiry@domain.co.in")).toBe(true);
      expect(EMAIL_REGEX.test("invalid-email")).toBe(false);
      expect(EMAIL_REGEX.test("user@.com")).toBe(false);
      expect(EMAIL_REGEX.test("@domain.com")).toBe(false);
      expect(EMAIL_REGEX.test("user@domain")).toBe(false);
    });

    it("validates phone numbers with PHONE_REGEX", () => {
      expect(PHONE_REGEX.test("+91 95373 92180")).toBe(true);
      expect(PHONE_REGEX.test("09537392180")).toBe(true);
      expect(PHONE_REGEX.test("+1 (555) 123-4567")).toBe(true);
      expect(PHONE_REGEX.test("abc")).toBe(false);
    });
  });

  describe("validateInterestForm", () => {
    it("approves valid form data", () => {
      const data = {
        name: "Devendra Jethani",
        email: "devendra@example.com",
        phone: "+91 95373 92180",
        interestType: "I'd like to volunteer",
        message: "I would love to help in community education.",
      };

      const result = validateInterestForm(data);
      expect(result.isValid).toBe(true);
      expect(Object.keys(result.errors).length).toBe(0);
    });

    it("approves valid form data without optional phone and message", () => {
      const data = {
        name: "Devendra Jethani",
        email: "devendra@example.com",
        phone: "",
        interestType: "General enquiry",
        message: "",
      };

      const result = validateInterestForm(data);
      expect(result.isValid).toBe(true);
      expect(Object.keys(result.errors).length).toBe(0);
    });

    it("rejects empty name or invalid name", () => {
      const data = {
        name: "1",
        email: "valid@example.com",
      };

      const result = validateInterestForm(data);
      expect(result.isValid).toBe(false);
      expect(result.errors.name).toBeDefined();
    });

    it("rejects invalid email formats", () => {
      const data = {
        name: "Valid User",
        email: "invalid-email-format",
      };

      const result = validateInterestForm(data);
      expect(result.isValid).toBe(false);
      expect(result.errors.email).toContain("valid email address");
    });

    it("rejects invalid phone numbers when provided", () => {
      const data = {
        name: "Valid User",
        email: "valid@example.com",
        phone: "123", // too short (under 7 digits)
      };

      const result = validateInterestForm(data);
      expect(result.isValid).toBe(false);
      expect(result.errors.phone).toContain("7-15 digits");
    });
  });
});
