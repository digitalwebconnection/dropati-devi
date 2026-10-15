import { appConfig } from "@/config";

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

  const payload = {
    access_key: appConfig.web3FormsAccessKey,
    subject: `New Interest Registration: ${data.interestType || "General Enquiry"} (${data.name || "Anonymous"})`,
    from_name: "Dropati Devi Foundation Website",
    name: data.name,
    email: data.email,
    phone: data.phone || "Not provided",
    interest_type: data.interestType,
    message: data.message || "No specific message provided.",
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
