import { DE_DE, EN_US, ES_AR, PT_BR } from '../enums/languages.js';



const PROJECT_ID = '43';
let translations = null;
let language = ES_AR;

export async function getTranslations(lang = language, callback) {
    localStorage.clear();
    language = lang;
    if (language === ES_AR) {
        console.log(`FETCH TRANSLATIONS --- key = traduccion`);
        return;
    }

    return await fetch(`https://traduci-la-strapi.herokuapp.com/api/translations/${PROJECT_ID}/${language}`)
    .then(response => response.json())
    .then(data => {
        localStorage.setItem('translations', JSON.stringify(data));
        translations = data;
        if(callback) callback()
    });
}

export function getPhrase(key) {
    if (!translations) {
        const locals = localStorage.getItem('translations');
        translations = locals ? JSON.parse(locals) : null;
    }

    let phrase = key;
    if (translations && translations[key]) {
        phrase = translations[key];
    }

    return phrase;
}

function isAllowedLanguge(language) {
    const allowedLanguages = [ES_AR, EN_US, PT_BR, DE_DE];
    // @ts-ignore
    return allowedLanguages.includes(language);
}

export function getLanguageConfig() {
    let languageConfig;

    // Obtener desde la URL el idioma
    console.log(window.location.href)

    /* 
      depende como lo manejemos: 
      1) puede venir como www.dominio.com/es-AR
      2) puede venir como www.dominio.com?lang=es-AR
      En el primer caso se obtiene con: window.location.pathname
      En el segundo caso se obtiene leyendo el query param lang 
      
      vamos a implementar una logica que cubra ambos casos
    */

    const path = window.location.pathname;
    const params = new URL(window.location.href).searchParams;
    const queryLang = params.get('lang');

    languageConfig = path ?? queryLang;

    if (languageConfig) {
        if (isAllowedLanguge(languageConfig)) {
            return languageConfig;
        }
    }

    const browserLanguage = window.navigator.language;
    if (isAllowedLanguge(browserLanguage)) {
        return browserLanguage;
    }

    return ES_AR;
}