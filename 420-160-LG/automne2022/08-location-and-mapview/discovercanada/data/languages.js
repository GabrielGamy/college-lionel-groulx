import { I18n } from "i18n-js";
import * as Localization from "expo-localization";

const fr = {
  app_title: "Découvrir le Canada",
  states: "Provinces",
  Alberta: "Alberta",
  "Colombie-Britannique": "Colombie-Britannique",
  "Île-du-Prince-Édouard": "Île-du-Prince-Édouard",
  Manitoba: "Manitoba",
  "Nouveau-Brunswick": "Nouveau-Brunswick",
  "Nouvelle-Écosse": "Nouvelle-Écosse",
  Ontario: "Ontario",
  Québec: "Québec",
  Saskatchewan: "Saskatchewan",
  "Terre-Neuve-et-Labrador": "Terre-Neuve-et-Labrador",
  "Territoires du Nord-Ouest": "Territoires du Nord-Ouest",
  Nunavut: "Nunavut",
  Yukon: "Yukon",
  learn_more: "Découvrir",
  close: "Fermer",
  email: "Courriel",
  cancel: "Annuler",
  send: "Envoyer",
  thankyoufeedback: "Merci pour votre message!",
  visitWebsite: "Visitez le site web",
  cities: "Villes",
  attractions: "Attractions",
  locationRequired: "Location permissions are required!",
  deviceRequired: "Device required!",
};

const en = {
  app_title: "Discover Canada",
  states: "States",
  Alberta: "Alberta",
  "Colombie-Britannique": "British Columbia",
  "Île-du-Prince-Édouard": "Prince Edouard Island",
  Manitoba: "Manitoba",
  "Nouveau-Brunswick": "New-Brunswick",
  "Nouvelle-Écosse": "Nova-Scotia",
  Ontario: "Ontario",
  Québec: "Quebec",
  Saskatchewan: "Saskatchewan",
  "Terre-Neuve-et-Labrador": " Newfoundland and Labrador",
  "Territoires du Nord-Ouest": "Northwest Territories",
  Nunavut: "Nunavut",
  Yukon: "Yukon",
  learn_more: "Learn More",
  close: "Close",
  email: "Email",
  cancel: "Cancel",
  send: "Send",
  thankyoufeedback: "Thank you for your feedback!",
  visitWebsite: "Visit the website",
  cities: "Cities",
  attractions: "Attractions",
  locationRequired: "Les permissions de localisation sont requises!",
  deviceRequired: "Appareil physique requis!",
};

const i18n = new I18n({ en, fr });

i18n.enableFallback = true;
i18n.defaultLocale = "fr";
i18n.locale = Localization.locale;

export default i18n;
