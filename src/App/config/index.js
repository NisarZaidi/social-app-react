import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// firebase ka configuration ka object jo k firebase k project se coy kiya ha

const firebaseConfig = {
    apiKey: "AIzaSyBw7YEw4k5zEATDH_D7fcQ1svVvEMqRJ4Q",
    authDomain: "socialwebapp-c2324.firebaseapp.com",
    projectId: "socialwebapp-c2324",
    storageBucket: "socialwebapp-c2324.appspot.com",
    messagingSenderId: "546468680358",
    appId: "1:546468680358:web:61762237fa2d9eb1245a67",
    measurementId: "G-8LEVJXTXCS"
};
// firebase ka config object ko initilize krrhy hen next line pe
const app = initializeApp(firebaseConfig);

// firestore ko firebase app se join karrhy hen then export krdiya
export const firestore = getFirestore(app);