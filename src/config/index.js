/**
 * Global Application Configuration
 * Provides centralized environment variable access and defaults.
 */
export const appConfig = {
  name: "Dropati Devi Foundation",
  tagline: "A Legacy of Strength. A Future of Possibilities.",
  siteUrl: import.meta.env.VITE_SITE_URL || "https://dropatidevifoundation.org",
  web3FormsAccessKey:
    import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "589bb5ac-3410-4ce4-ba42-98e79cd40c80",
  apiEndpoints: {
    web3Forms: "https://api.web3forms.com/submit",
  },
  aosDefaults: {
    duration: 850,
    easing: "ease-out-cubic",
    once: false,
    offset: 60,
    delay: 50,
  },
};

export default appConfig;
