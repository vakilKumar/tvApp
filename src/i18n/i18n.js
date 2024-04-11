import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import { Localization } from 'expo-localization';

// creating a language detection plugin using expo
// http://i18next.com/docs/ownplugin/#languagedetector
const languageDetector = {
  type: 'languageDetector',
  async: true, // flags below detection to be async
  detect: (callback) => {
    return /*'en'; */ Localization.getLocalizationAsync().then(({ locale }) => {
      callback(locale);
    });
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(languageDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'hi',

    resources: {
      en: {
        login: 'Login',
        register: 'Register',
        common: {
          currentLanguage: 'The current language is "{{lng}}"',
        },
      },
      hi: {
        login: 'लॉग इन',
        register: 'पंजीकरण',
        common: {
          currentLanguage: 'Die Sprache ist auf "{{lng}}" gesetzt',
          actions: {
            toggleToGerman: 'Deutsch',
            toggleToEnglish: 'English',
            goToPage2: 'Öffne Seite 2',
          },
        },
      },
    },

    // have a common namespace used around the full app
    ns: ['common'],
    defaultNS: 'common',

    debug: true,

    // cache: {
    //   enabled: true
    // },

    interpolation: {
      escapeValue: false, // not needed for react as it does escape per default to prevent xss!
    },
  });

export default i18n;