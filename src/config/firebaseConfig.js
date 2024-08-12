// IImporte las funciones que necesita desde los SDK que necesita
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// La configuración de Firebase de tu aplicación web
const firebaseConfig = {
  apiKey: "AIzaSyCRDqjePKhOYVz_exHb8IvMDj0giuuN_Ds",
  authDomain: "ecommerce-0324.firebaseapp.com",
  projectId: "ecommerce-0324",
  storageBucket: "ecommerce-0324.appspot.com",
  messagingSenderId: "520135656669",
  appId: "1:520135656669:web:dc39a6a71edb59a902c734"
};

// Inicializar  Firebase
const app = initializeApp(firebaseConfig);

// Referencia a la base de datos
export const db = getFirestore(app);


