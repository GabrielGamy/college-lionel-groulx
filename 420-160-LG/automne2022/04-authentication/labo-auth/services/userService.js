const API_KEY = 'AIzaSyCbdUx21bxMRLkn80Fryrx1wuYyD2WfebU';
const BASE_URL = 'https://identitytoolkit.googleapis.com/v1/accounts';
import AsyncStorage from '@react-native-async-storage/async-storage';

const signUp = async (email, password) => {
  var response = await fetch(`${BASE_URL}:signUp?key=${API_KEY}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, returnSecureToken: true }),
  });

  var data = await response.json();
  return { success: response.ok, ...data };
};

const login = async (email, password) => {
  var response = await fetch(`${BASE_URL}:signInWithPassword?key=${API_KEY}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, returnSecureToken: true }),
  });

  var data = await response.json();
  return { success: response.ok, ...data };
};

const updateProfile = async (displayName, idToken) => {
  var response = await fetch(`${BASE_URL}:update?key=${API_KEY}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ idToken, displayName, returnSecureToken: true }),
  });

  var data = await response.json();
  return { success: response.ok, ...data };
};

const getProfile = async (idToken) => {
  var response = await fetch(`${BASE_URL}:lookup?key=${API_KEY}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ idToken }),
  });

  var data = await response.json();
  return { success: response.ok, ...data };
};

const storeData = async (idToken, expiresInSeconds) => {
  const expiresIn = new Date();  
  expiresIn.setSeconds(expiresIn.getSeconds() + expiresInSeconds);

  const value = { idToken, expiresIn };

  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@token', jsonValue);
  } catch (e) {
    // saving error
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@token');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

const clearData = async () => {
  try {
    await AsyncStorage.clear()
  } catch(e) {
    // clear error
  }

  console.log('Done.')
}

const isAuthenticated = async () => {
  const tokenInfo = await getData();
  if (tokenInfo && new Date(tokenInfo.expiresIn) > Date.now()) {
    return true;
  }
  return false;
}

const sendResetPasswordEmail = async (email) => {
  var response = await fetch(`${BASE_URL}:sendOobCode?key=${API_KEY}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ requestType:"PASSWORD_RESET", email }),
  });

  var data = await response.json();
  return { success: response.ok, ...data };
}

const sendEmailVerification = async (idToken) => {
  var response = await fetch(`${BASE_URL}:sendOobCode?key=${API_KEY}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ requestType:"VERIFY_EMAIL", idToken }),
  });

  var data = await response.json();
  return { success: response.ok, ...data };
}

const confirmEmailVerification = async (oobCode) => {
  var response = await fetch(`${BASE_URL}:update?key=${API_KEY}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ oobCode }),
  });

  var data = await response.json();
  return { success: response.ok, ...data };
}

const getCommonError = (code) => {
  switch (code) {
    case 'INVALID_EMAIL':
      return "L'adresse e-mail est mal formatée.";
    case 'MISSING_EMAIL':
      return "L'adresse e-mail est invalide.";
    case 'EMAIL_EXISTS':
      return "L'adresse e-mail est déjà utilisée par un autre compte.";
    case 'OPERATION_NOT_ALLOWED':
      return 'La connexion par mot de passe est désactivée pour ce projet.';
    case 'TOO_MANY_ATTEMPTS_TRY_LATER':
      return "Nous avons bloqué toutes les demandes de cet appareil en raison d'une activité inhabituelle. Réessayez plus tard.";
    case 'EMAIL_NOT_FOUND':
      return "Il n'y a pas de fiche utilisateur correspondant à cet identifiant. L'utilisateur a peut-être été supprimé.";
    case 'INVALID_PASSWORD':
      return "Le mot de passe est invalide ou l'utilisateur n'a pas de mot de passe.";
    case 'MISSING_PASSWORD':
      return "Le mot de passe est invalide ou l'utilisateur n'a pas de mot de passe.";
    case 'USER_DISABLED':
      return 'Le compte utilisateur a été désactivé par un administrateur.';
    default:
      return `Une erreur inhabituelle s'est produite ! Veuillez réessayer (code: ${code}).`;
  }
};

export {
  isAuthenticated,
  signUp,
  login,
  updateProfile,
  getProfile,
  storeData,
  getData,
  clearData,
  sendEmailVerification,
  confirmEmailVerification,
  sendResetPasswordEmail,
  getCommonError,
};
