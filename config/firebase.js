import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBwSNbs5RZ7SpOiqlChVt0b9DimugYnw3Q",
  authDomain: "myproject-1a649.firebaseapp.com",
  projectId: "myproject-1a649",
  storageBucket: "myproject-1a649.appspot.com",
  messagingSenderId: "829166022758",
  appId: "1:829166022758:web:df08ce0c392e13cf90bda7",
  measurementId: "G-Y42MV6XCYY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
