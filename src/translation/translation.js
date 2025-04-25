import translation from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './language/en.json';
import es from './language/es.json';

let idiomSelected = 'es';

function idiom() {
  return idiomSelected;
}

translation.use(initReactI18next).init({
  lng: idiom(),
  fallbacking: idiom(),
  compatibilityJSON: 'v3',
  resources: {
    en,
    es,
  },
  interpolation: {
    escapeValue: false,
  },
});

export function ChangeIdiom(newIdiom) {
  idiomSelected = newIdiom;
}

export default translation;
