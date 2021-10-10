import { useEffect, useState } from "react"
import initAuth from "../components/FireBase/init"
import { getAuth,GoogleAuthProvider,signInWithPopup,onAuthStateChanged,signOut,GithubAuthProvider  } from "firebase/auth";




// config function to initialize authentication start 
initAuth()
// config function to initialize authentication end 



const useFireBase = () => {


    // states for management error and users start 
    const [user,setUser] = useState({})
    const [err,setErr] = useState('')
    // states for management error and users end 




    // google provider and authentication variables start
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
    // google provider and authentication variables start




    // google signin function start 
    const googleSignIn = () => {
        signInWithPopup(auth,googleProvider)
            .then(res => {
                setUser(res.user)
            })
            .catch(err => {
                setErr(err.message)
            })
        }
    // google signin function end 



    // git signin function start 
    const gitSignIn = () => {
        signInWithPopup(auth,gitProvider)
            .then(res => {
                setUser(res.user)
            })
            .catch(err => {
            setErr(err.message)
        })
    }
    // git signin function end 


    // logout button start 
    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser({})
            // window.location.reload()
        })
        .catch((err) => {
            setErr(err)
          });
    }
    // logout button end 

//=================================================================================================

    // using effect for changing states start 
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } 
        });
    },[auth])
    // using effect for changing states start 



//===================================================================================================


    // returning elements whitch to be used start 
    return{
        user,
        err,
        logOut,
        googleSignIn,
        gitSignIn
    }
    // returning elements whitch to be used end    
}

export default useFireBase