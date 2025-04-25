import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'tr',
    supportedLngs: ['tr', 'en'],
    lng: 'tr',
    detection: {
      order: ['cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/common.json',
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
