import  { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import { RotatingSquare } from 'react-loader-spinner';


export const AuthContext=createContext(null);



const AuthProvider = ({children}) => {

    const provider=new GoogleAuthProvider();

    const [user, setUser]=useState(null);

    const [loader, setLoader]=useState(true);


    const signGoogle=()=>{
        return signInWithPopup(auth,provider);
    }


    const createUser=(email,password)=>{
        setLoader(true);
      return createUserWithEmailAndPassword(auth,email,password);
      
    }

    const signIn=(email,password)=>{
        setLoader(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut=()=>{
        setLoader(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            setLoader(false);
        });
        return () => {
            unsubscribe();
        }
    }, []);


    
   
    const authInfo={user,createUser,signIn,logOut,loader,signGoogle};
    return (
        <div>

            <AuthContext.Provider value={authInfo}>
               {
                loader?<p className='flex items-center justify-center h-screen'><RotatingSquare
                visible={true}
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="rotating-square-loading"
                wrapperStyle={{}}
                wrapperClass=""
                /></p>:children
               }
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}   