import {  getAuth,signOut, signInWithPopup, GoogleAuthProvider,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import intialization from "../FirebaseAuth/FirebaseAuth";

intialization();


const UseFirebase = () =>{

  const[isLoading, setLoading] = useState(true)
  const [user, setUser] = useState({});

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

    //using google
    const googleLogIn = ()=>{
      setLoading(true);
     return signInWithPopup(auth, googleProvider)
    }
    // any thing change
    useEffect(() =>{
      onAuthStateChanged(auth, (user) => {
          if (user) {
              setUser(user)
          } 
          setLoading(false)
        });
    }, [])
    //sign out
    //log Out
const logOut = () =>{
  setLoading(true)
    signOut(auth).then(() => {
      setUser('')
      })
      .finally(()=> setLoading(false))
}
  return{
    googleLogIn,
    setUser,
    user,
    isLoading,
    setLoading,
    logOut
  }
}

export default UseFirebase;