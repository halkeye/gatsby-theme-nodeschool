import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import defaultLanguage from './default-language.json';
import translationEn from './locales/en/translation.json';
import translationPtBr from './locales/pt-BR/translation.json';

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: {
      en: {
        translation: translationEn,
      },
      'pt-BR': {
        translation: translationPtBr,
      },
    },
    lng: defaultLanguage,
    fallbackLng: `en`,
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });
