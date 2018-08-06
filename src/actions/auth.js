import { firebase, googleAuthProvider, githubAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

export const startLogin = (e) => {
  const provider = e.target.value;
  return () => {
    if (provider === 'google') {
      return firebase.auth().signInWithPopup(googleAuthProvider);      
    } else if (provider === 'github') {
      return firebase.auth().signInWithPopup(githubAuthProvider);            
    }
  };
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};