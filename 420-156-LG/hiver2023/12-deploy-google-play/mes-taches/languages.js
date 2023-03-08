import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';

const translations = {
  en: {
    app_name: 'My Todos',
    newTodoTitle: 'New Todo',
    newTodoDescription: 'Enter your todo title',
    newTodoInputLabel: 'Todo',
    newTodoAddText: 'Add',
    newTodoCancelText: 'Cancel',
    newUserTitle: 'Enter your name',
    newUserDescription: 'Enter your full name',
    newUserInputLabel: 'Full Name',
    newUserAddText: 'Confirm',
    newUserCancelText: 'Cancel',
    welcome: 'Welcome',
    completeText: 'Complete Task',
    deleteText: 'Delete',
  },
  fr: {
    app_name: 'Mes tâches',
    newTodoTitle: 'Nouvelle Tache',
    newTodoDescription: 'Ajouter une nouvelle tache',
    newTodoInputLabel: 'Tache',
    newTodoAddText: 'Ajouter',
    newTodoCancelText: 'Annuler',
    newUserTitle: 'Entrez votre nom',
    newUserDescription: 'Entre votre nom complet',
    newUserInputLabel: 'Nom',
    newUserAddText: 'Confirmer',
    newUserCancelText: 'Annuler',
    welcome: 'Bienvenue',
    completeText: 'Terminer',
    deleteText: 'Supprimer',
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
