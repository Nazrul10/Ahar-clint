import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.confiq";

const intialization =()=>{
    initializeApp(firebaseConfig);
}

export default intialization;