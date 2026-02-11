import LocalizedStrings from "react-localization";

export const localStrings = new LocalizedStrings({
  sp: {
    boilerPlateHeader: "Caldera RNPlaca",
    welcomeBack: "Bienvenido de nuevo",
    login: "Acceso",
    forgotPassword: "Has olvidado tu contraseña",
    placeholderEmail: "Correo electrónico",
    placeholderPassword: "Contraseña",
    changeTheme: "Cambiar de tema",
    changeLanguage: "Cambiar idioma",
    maintenanceMsg:
      "El mantenimiento programado está en curso para mejorar tu experiencia.\n¡Gracias por tu paciencia!",
  },
  en: {
    boilerPlateHeader: "RN BoilerPlate",
    welcomeBack: "Welcome Back",
    login: "Login",
    forgotPassword: "Forgot Password",
    placeholderEmail: "Email",
    placeholderPassword: "Password",
    changeTheme: "Change Theme",
    changeLanguage: "Change Language",
    serverError: "Something went wrong!",
    maintenanceMsg:
      "Scheduled maintenance is in progress to improve your experience. \nThanks for your patience!",
  },
});

localStrings.setLanguage("en");
