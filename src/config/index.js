/**
 * Global Application Configuration
 * Provides centralized environment variable access and defaults.
 */
export const appConfig = {
  name: "Dropati Devi Foundation",
  tagline: "A Legacy of Strength. A Future of Possibilities.",
  siteUrl: import.meta.env.VITE_SITE_URL || "https://dropatidevifoundation.org",
  web3FormsAccessKey: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "",
  apiEndpoints: {
    web3Forms: "https://api.web3forms.com/submit",
  },
  aosDefaults: {
    duration: 650,
    easing: "ease-out-cubic",
    once: true,
    offset: 20,
    delay: 0,
    mirror: false,
    anchorPlacement: "top-bottom",
  },
};

export default appConfig;
