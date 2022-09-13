import { I18n } from "i18n-js";
import * as Localization from 'expo-localization';

const fr = {
  app_title: 'Découvrir le Canada',
  states: 'Provinves',
  'Alberta': 'Alberta',
  'Colombie-Britannique': 'Colombie-Britannique',
  'Île-du-Prince-Édouard': 'Île-du-Prince-Édouard',
  'Manitoba': 'Manitoba',
  'Nouveau-Brunswick': 'Nouveau-Brunswick',
  'Nouvelle-Écosse': 'Nouvelle-Écosse',
  'Ontario': 'Ontario',
  'Québec': 'Québec',
  'Saskatchewan': 'Saskatchewan',
  'Terre-Neuve-et-Labrador': 'Terre-Neuve-et-Labrador',
  'Territoires du Nord-Ouest': 'Territoires du Nord-Ouest',
  'Nunavut': 'Nunavut',
  'Yukon': 'Yukon',
  learn_more: 'Découvrir'
};

const en = {
  app_title: 'Discover Canada',
  states: 'States',
  'Alberta': 'Alberta',
  'Colombie-Britannique': 'British Columbia',
  'Île-du-Prince-Édouard': 'Prince Edouard Island',
  'Manitoba': 'Manitoba',
  'Nouveau-Brunswick': 'New-Brunswick',
  'Nouvelle-Écosse': 'Nova-Scotia',
  'Ontario': 'Ontario',
  'Québec': 'Quebec',
  'Saskatchewan': 'Saskatchewan',
  'Terre-Neuve-et-Labrador': ' Newfoundland and Labrador',
  'Territoires du Nord-Ouest': 'Northwest Territories',
  'Nunavut': 'Nunavut',
  'Yukon': 'Yukon',
  learn_more: 'Lean More'
}

const i18n = new I18n({ en, fr });

i18n.enableFallback = true;
i18n.defaultLocale = "fr";
i18n.locale = Localization.locale;

export default i18n;