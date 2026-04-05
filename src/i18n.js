import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enJSON from '../locales/i18n/en.json';
import esJSON from '../locales/i18n/es.json';

const resources = {
    en: { translation: enJSON },
    es: { translation: esJSON },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
