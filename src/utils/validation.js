/**
 * Form Validation and Schema Utilities: Dropati Devi Foundation
 */

/**
 * Name Regex:
 * Matches Unicode letters, combining marks (accents, matras), spaces, hyphens, periods, and apostrophes (2 to 80 characters).
 */
export const NAME_REGEX = /^[\p{L}\p{M}\s.'-]{2,80}$/u;

/**
 * RFC 5322 Compliant Email Regex:
 * Enforces valid local part, domain structure, and valid TLD format.
 */
export const EMAIL_REGEX =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

/**
 * International Phone Regex:
 * Permits international notation (+), digits, spaces, dashes, and parentheses (7 to 25 characters).
 */
export const PHONE_REGEX = /^(\+?[0-9\s\-()]{7,25})$/;

/**
 * Validates interest modal form data against schema constraints and regex patterns.
 * @param {Object} data
 * @param {string} [data.name]
 * @param {string} [data.email]
 * @param {string} [data.phone]
 * @param {string} [data.message]
 * @returns {{ isValid: boolean, errors: Record<string, string> }}
 */
export function validateInterestForm(data) {
  const errors = {};
  const trimmedName = (data.name || "").trim();
  const trimmedEmail = (data.email || "").trim();
  const trimmedPhone = (data.phone || "").trim();
  const trimmedMessage = (data.message || "").trim();

  // 1. Name validation
  if (!trimmedName) {
    errors.name = "Full name is required.";
  } else if (trimmedName.length < 2) {
    errors.name = "Name must be at least 2 characters.";
  } else if (trimmedName.length > 80) {
    errors.name = "Name cannot exceed 80 characters.";
  } else if (!NAME_REGEX.test(trimmedName)) {
    errors.name = "Name can only contain letters, spaces, hyphens, and apostrophes.";
  }

  // 2. Email validation
  if (!trimmedEmail) {
    errors.email = "Email address is required.";
  } else if (trimmedEmail.length > 120) {
    errors.email = "Email cannot exceed 120 characters.";
  } else if (!EMAIL_REGEX.test(trimmedEmail)) {
    errors.email = "Please enter a valid email address (e.g., name@domain.com).";
  }

  // 3. Phone validation (optional)
  if (trimmedPhone) {
    const digitsOnly = trimmedPhone.replace(/\D/g, "");
    if (
      !PHONE_REGEX.test(trimmedPhone) ||
      digitsOnly.length < 7 ||
      digitsOnly.length > 15
    ) {
      errors.phone =
        "Please enter a valid phone number (7-15 digits, e.g. +91 95373 92180).";
    }
  }

  // 4. Message validation (optional, bounds)
  if (trimmedMessage.length > 1500) {
    errors.message = "Message cannot exceed 1500 characters.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
