import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC1FwV7vM1r6tZLfd_qyPE0d3S3y_I4qk8",
  authDomain: "jasmin-app.firebaseapp.com",
  projectId: "jasmin-app",
  storageBucket: "jasmin-app.appspot.com",
  messagingSenderId: "685022605978",
  appId: "1:685022605978:web:e47c44396bf9797c86e523",
  measurementId: "G-VLDHBP18TY"
};
firebase.initializeApp(firebaseConfig);


// export const database = firebase.database();
// export const { auth } = firebase;
// export const storage = firebase.storage();

// const provider = new auth.GoogleAuthProvider();

// export function login() {
//   return auth().signInWithPopup(provider).then(async (result) => {
//     const { displayName, email, photoURL, uid } = result.user;
//     const authUser = { displayName, email, photoURL, uid };
//     return authUser;
//   })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       const { email } = error;
//       const { credential } = error;
//       console.log(errorCode, errorMessage, email, credential);
//       throw new Error();
//     });
// }
