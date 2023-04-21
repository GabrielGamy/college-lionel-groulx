import AsyncStorage from "@react-native-async-storage/async-storage";

const API_KEY = "AIzaSyCbdUx21bxMRLkn80Fryrx1wuYyD2WfebU";

const saveLocalUser = async (user) => {
  user.loginDate = new Date();
  await AsyncStorage.setItem("@user", JSON.stringify(user));
};

const isConnected = async () => {
  const userString = await AsyncStorage.getItem("@user");

  if (userString) {
    const user = JSON.parse(userString);

    const result = new Date(user.loginDate);

    result.setSeconds(result.getSeconds() + parseInt(user.expiresIn));

    // if (result <= new Date()) {
    //   // utiliser le refreshtoken et obtenir le idtoken
    // }

    return {
      isConnected: result > new Date(),
      token: user.idToken,
    };
  }

  return false;
};

const signup = async (email, password) => {
  const endpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;

  const response = await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (data.error) {
    const errorMessage = getCommonError(data.error.message);
    return { errorMessage };
  }

  return { data };
};

const signin = async (email, password) => {
  const endpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

  const response = await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (data.error) {
    const errorMessage = getCommonError(data.error.message);
    return { errorMessage };
  }

  await saveLocalUser(data);

  return { data };
};

const sendForgotPassword = async (email) => {
  const endpoint = `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${API_KEY}`;

  const response = await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify({
      requestType: "PASSWORD_RESET",
      email,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (data.error) {
    const errorMessage = getCommonError(data.error.message);
    return { errorMessage };
  }

  return { data };
};

const sendVerifyEmail = async (email) => {
  const endpoint = `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${API_KEY}`;

  const response = await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify({
      requestType: "VERIFY_EMAIL",
      email,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (data.error) {
    const errorMessage = getCommonError(data.error.message);
    return { errorMessage };
  }

  return { data };
};

const getUserData = async (idToken) => {
  const endpoint = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${API_KEY}`;

  const response = await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify({ idToken }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (data.error) {
    const errorMessage = getCommonError(data.error.message);
    return { errorMessage };
  }

  return { data };
};

const logout = async () => {
  await AsyncStorage.clear();
};

const getCommonError = (code) => {
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
      return `Une erreur inhabituelle s'est produite! Veuillez réessayer (code: ${code}).`;
  }
};

export {
  signup,
  signin,
  sendForgotPassword,
  sendVerifyEmail,
  isConnected,
  logout,
  getCommonError,
  getUserData,
};
