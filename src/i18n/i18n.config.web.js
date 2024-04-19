import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
// Import translation files
// import enTranslation from './transalation/en.json'
// import hiTranslation from './transalation/hi.json'; // French translations (example)

i18n
  .use(Backend)
  .use(initReactI18next) // Initialize react-i18next
  .init({
    resources: {
      en: {
        // translation: enTranslation,
        // translation: Platform.OS === 'web' ? 'ab' : enTranslation,
      },
      hi: {
        // translation: hiTranslation,
      },
      // Add more languages and translations as needed
    },
    fallbackLng: 'en', // Fallback language if translation not found
    lng: 'en', // Default language
    interpolation: {
      escapeValue: false, // React Native doesn't require HTML escaping
    },
  });

export default i18n;
