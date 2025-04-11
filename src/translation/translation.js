import translation from "i18next";
import { initReactI18next } from "react-i18next";

import en from './language/en.json';
import es from './language/es.json';

translation.use(initReactI18next).init({
    lng: idiom(),
    fallbacking: idiom(),
    compatibilityJSON: 'v3',
    resources: {
        en,
        es,
    },
    interpolation: {
        escapeValue: false
    }
});

function idiom() {
    return "es";
}

export default translation;