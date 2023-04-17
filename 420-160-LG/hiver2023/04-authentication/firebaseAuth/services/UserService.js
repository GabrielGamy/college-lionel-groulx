const API_KEY = "AIzaSyCbdUx21bxMRLkn80Fryrx1wuYyD2WfebU";

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

const signin = (email, password) => {};

const sendForgotPassword = () => {};

const isConnected = () => {};

const logout = () => {};

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
  isConnected,
  logout,
  getCommonError,
};
