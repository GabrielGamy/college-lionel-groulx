import AsyncStorage from "@react-native-async-storage/async-storage";

const API_KEY = "AIzaSyCUc-ItRfC-Ac7WJVybHgi7CNtbPsU3oO4";

export const isUserConnected = async () => {
  try {
    const userData = await AsyncStorage.getItem("USER_DATA");
    return userData !== null;
  } catch (e) {
    console.log("isUserConnected Error: ", e);
  }
};

export const saveUserInfo = async (userInfo) => {
  try {
    await AsyncStorage.setItem("USER_DATA", JSON.stringify(userInfo));
  } catch (e) {
    console.log("saveUserInfo Error: ", e);
  }
};

export const removeUserInfo = async () => {
  await AsyncStorage.removeItem("USER_DATA");
};

/**
 * API REST d'authentification Firebase
 * https://firebase.google.com/docs/reference/rest/auth
 */
const auth = (url, email, password, callback) => {
  const resquestUrl = `https://identitytoolkit.googleapis.com/v1/${url}?key=${API_KEY}`;
  const requestBody = { email, password, returnSecureToken: true };

  fetch(resquestUrl, {
    method: "POST",
    body: JSON.stringify(requestBody),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      callback({ error: data.error, data });
    })
    .catch((error) => {
      callback({ error, data: null });
    });
};

/**
 * Inscrivez-vous avec email / mot de passe
 * https://firebase.google.com/docs/reference/rest/auth#section-create-email-password
 */
export const signUp = (email, password, callback) => {
  auth("accounts:signUp", email, password, callback);
};

/**
 * Connectez-vous avec email / mot de passe
 * https://firebase.google.com/docs/reference/rest/auth#section-sign-in-email-password
 */
export const login = (email, password, callback) => {
  auth("accounts:signInWithPassword", email, password, callback);
};

export const getCommonError = (code) => {
  switch (code) {
    case "INVALID_EMAIL":
      return "L'adresse e-mail est mal formatée.";
    case "MISSING_EMAIL":
      return "L'adresse e-mail est invalide.";
    case "EMAIL_EXISTS":
      return "L'adresse e-mail est déjà utilisée par un autre compte.";
    case "OPERATION_NOT_ALLOWED":
      return "La connexion par mot de passe est désactivée pour ce projet.";
    case "TOO_MANY_ATTEMPTS_TRY_LATER":
      return "Nous avons bloqué toutes les demandes de cet appareil en raison d'une activité inhabituelle. Réessayez plus tard.";
    case "EMAIL_NOT_FOUND":
      return "Il n'y a pas de fiche utilisateur correspondant à cet identifiant. L'utilisateur a peut-être été supprimé.";
    case "INVALID_PASSWORD":
      return "Le mot de passe est invalide ou l'utilisateur n'a pas de mot de passe.";
    case "MISSING_PASSWORD":
      return "Le mot de passe est invalide ou l'utilisateur n'a pas de mot de passe.";
    case "USER_DISABLED":
      return "Le compte utilisateur a été désactivé par un administrateur.";
    default:
      return `Une erreur inhabituelle s'est produite ! Veuillez réessayer (code: ${code}).`;
  }
};
