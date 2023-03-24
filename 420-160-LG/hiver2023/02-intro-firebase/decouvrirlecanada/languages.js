import * as Localization from "expo-localization";
import { I18n } from "i18n-js";

const translations = {
  en: {
    application: "Discover Canada",
    provinces: "States",
    en_savoir_plus: "Learn More",
    // Provinces
    alberta: "Alberta",
    colombie_britanique: "British Columbia",
    ile_du_prince_edouard: "Prince Edward Island",
    manitoba: "Manitoba",
    nouveau_brunswick: "New Brunswick",
    nouvelle_ecosse: "Nova Scotia",
    ontario: "Ontario",
    quebec: "Quebec",
    saskatchewan: "Saskatchewan",
    terre_neuve_et_labrador: "Newfoundland and Labrador",
    territoires_du_nord_ouest: "Northwest Territories",
    nunavut: "Nunavut",
    yukon: "Yukon",
  },
  fr: {
    application: "Discover Canada",
    provinces: "States",
    en_savoir_plus: "En savoir plus",
    // Provinces
    alberta: "Alberta",
    colombie_britanique: "Colombie Britanique",
    ile_du_prince_edouard: "Île-du-Prince-Édouard",
    manitoba: "Manitoba",
    nouveau_brunswick: "Nouveau-Brunswick",
    nouvelle_ecosse: "Nouvelle-Écosse",
    ontario: "Ontario",
    quebec: "Québec",
    saskatchewan: "Saskatchewan",
    terre_neuve_et_labrador: "Terre-Neuve-et-Labrador",
    territoires_du_nord_ouest: "Territoires du Nord-Ouest",
    nunavut: "Nunavut",
    yukon: "Yukon",
  },
};

const i18n = new I18n(translations);

// Définissez les paramètres régionaux une fois au début de votre application.
i18n.locale = Localization.locale;

/**
 * Lorsqu'une valeur est manquante dans une langue,
 * on utilise une autre langue avec la clé présente.
 */
i18n.enableFallback = true;

/**
 * Pour voir le mécanisme de secours,
 * décommentez la ligne ci-dessous pour forcer l'application à utiliser la langue japonaise.
 */
//i18n.locale = 'fr';

export { i18n };
