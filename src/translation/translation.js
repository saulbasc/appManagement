import translation from "i18next";
import { initReactI18next } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

import en from "./language/en.json";
import es from "./language/es.json";

async function GetLang() {
  const lang = await AsyncStorage.getItem("lang");
  return lang != null ? lang : "en";
}

export async function initI18() {
  const lang = await GetLang();
  translation.use(initReactI18next).init({
    lng: lang,
    fallbacking: lang,
    compatibilityJSON: "v3",
    resources: {
      en,
      es,
    },
    interpolation: {
      escapeValue: false,
    },
  });
}

initI18();

export default translation;
