import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyA0KetTQ54F-9yI1lZwEUMSsf1ayebixDY",
    authDomain: "king-store-db.firebaseapp.com",
    databaseURL: "https://king-store-db.firebaseio.com",
    projectId: "king-store-db",
    storageBucket: "king-store-db.appspot.com",
    messagingSenderId: "154357197530",
    appId: "1:154357197530:web:9f028827d1018c482553e3",
    measurementId: "G-95LJ8Y28XG"
  };

  export const createUserProfileDocument= async (userAuth, additionalData)=>{
      if(!userAuth) return;
          //docRef
          const userRef= firestore.doc(`users/${userAuth.uid}`);
          const snapShot= await userRef.get();
         // console.log(snapShot);
          //if data of the user available in db //add new user to db
          if(!snapShot.exists){
              const {displayName, email} = userAuth;
              const createdAt = new Date();
              try{
                  await userRef.set({
                      displayName,
                      email,
                      createdAt, 
                      ...additionalData
                  })
              }
              catch(error)
              {
                  console.log('error creating user', error);
              }
          }

      return userRef;
  }

  firebase.initializeApp(config);

  export const auth= firebase.auth();
  export const firestore= firebase.firestore();

  //google popup for auth and signin
  //const provider= firebase.auth.GoogleAuthProvider(); --old
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'})
  //signin popup of our provider(google-AuthProvider) not twitter,fb etc
  export const signInWithGoogle=()=> auth.signInWithPopup(provider);

  export default firebase;
