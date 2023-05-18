import  { createContext, useEffect, useState } from 'react';
import {  GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../Firebase/Firebase';



export const AuthContext = createContext('')
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const register = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const profile = (user, name, photo) => {
        return updateProfile(user, { displayName: name, photoURL: photo })
    }

    const verification = (user) => {
        return sendEmailVerification(user)
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const passwordReset = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unsubscribe();
        }

    }, [])

    const logout = () => {
        return signOut(auth)
    }

    const googleLogin = () => {
       return signInWithPopup(auth, googleProvider)
    }

    const githubLogin = () => {
      return signInWithPopup(auth, githubProvider)
    }

    
    const userValue = {
        register,
        profile,
        verification,
        login,
        passwordReset,
        user,
        loading,
        logout,
        googleLogin,
        githubLogin
    } 

    return (
        <AuthContext.Provider value={userValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;