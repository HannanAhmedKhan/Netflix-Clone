import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword,signOut } from "firebase/auth";
import { EmailAuthProvider } from "firebase/auth/web-extension";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";



const firebaseConfig = {
  apiKey: "AIzaSyAfa-Er4Xi6tYUeH-ZIAqxHKCB1pySMt7U",
  authDomain: "netflix-clone-1d160.firebaseapp.com",
  projectId: "netflix-clone-1d160",
  storageBucket: "netflix-clone-1d160.firebasestorage.app",
  messagingSenderId: "997146922355",
  appId: "1:997146922355:web:e53e3998de8f34249e4906"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const signup = async (name, email, password) => {
try  {
   const res= await createUserWithEmailAndPassword(auth, email, password);
   const user = res.user;
   await addDoc(collection(db, "users"), {
     uid: user.uid,
     name,
     authProvider:"local",
     email
   });
} 
catch (error) {
    console.error(error.message);
    toast.error(error.code.split('/')[1].split('-').join(" "));  
  }


}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword( auth, email, password);
    } catch (error) {
        console.error(error.message);
        toast.error(error.code.split('/')[1].split('-').join(" ")); 
      }
    }

const logout =  () => {
        signOut(auth);
}

export {auth, db, login, signup, logout};