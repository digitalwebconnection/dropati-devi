import { appConfig } from "@/config";

/**
 * Strips carriage returns and newlines from single-line fields to prevent SMTP header injection.
 * @param {string} val
 * @returns {string}
 */
export function sanitizeSingleLine(val) {
  return (val || "").replace(/[\r\n]+/g, " ").trim();
}

/**
 * Submits an enquiry/registration payload to Web3Forms API.
 *
 * @param {Object} data
 * @param {string} data.name - Submitter's full name
 * @param {string} data.email - Submitter's email
 * @param {string} data.phone - Submitter's phone number
 * @param {string} data.interestType - Category of support or collaboration
 * @param {string} data.message - Detailed message
 * @returns {Promise<{ success: boolean, message: string }>}
 */
export async function submitInterestEnquiry(data) {
  // Silent rejection of automated bot submissions via honeypot field
  if (data.botcheck) {
    return {
      success: true,
      message: "Thank you! Your interest has been recorded.",
    };
  }

  // Guard for missing API key configuration
  if (!appConfig.web3FormsAccessKey) {
    console.warn("VITE_WEB3FORMS_ACCESS_KEY is not configured in environment.");
    if (import.meta.env.DEV) {
      return {
        success: true,
        message:
          "Dev Mode: Simulated submission (configure VITE_WEB3FORMS_ACCESS_KEY in .env.local for real emails).",
      };
    }
    throw new Error(
      "Enquiry submission is temporarily unavailable. Please email us directly at dropatidevifoundation1945@gmail.com."
    );
  }

  const sanitizedName = sanitizeSingleLine(data.name);
  const sanitizedEmail = sanitizeSingleLine(data.email);
  const sanitizedPhone = sanitizeSingleLine(data.phone);
  const sanitizedInterestType = sanitizeSingleLine(data.interestType);
  const sanitizedMessage = (data.message || "").trim();

  const payload = {
    access_key: appConfig.web3FormsAccessKey,
    subject: `New Interest Registration: ${sanitizedInterestType || "General Enquiry"} (${sanitizedName || "Anonymous"})`,
    from_name: "Dropati Devi Foundation Website",
    name: sanitizedName,
    email: sanitizedEmail,
    phone: sanitizedPhone || "Not provided",
    interest_type: sanitizedInterestType,
    message: sanitizedMessage || "No specific message provided.",
    botcheck: false,
    submitted_at: new Date().toISOString(),
  };

  const response = await fetch(appConfig.apiEndpoints.web3Forms, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await response.json();

  if (response.ok && result.success) {
    return {
      success: true,
      message: result.message || "Thank you! Your interest has been recorded.",
    };
  }

  throw new Error(
    result.message || "Something went wrong while submitting. Please try again."
  );
}

export default {
  submitInterestEnquiry,
};
