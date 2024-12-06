import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { resources } from "./resources";

i18n
  .use(LanguageDetector) // Определяет язык пользователя автоматически
  .use(initReactI18next) // Интеграция с React
  .init({
    resources,
    fallbackLng: "eng", // Язык по умолчанию
    interpolation: {
      escapeValue: false, // React автоматически экранирует HTML
    },
  });

export default i18n;
