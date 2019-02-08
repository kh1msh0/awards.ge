import Rebase from "re-base";
import firebase from "firebase";
import "firebase/storage";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDvkds_n7snsZG7XzAu_4lDMR8NAe8j9ho",
    authDomain: "awardsredfork.firebaseapp.com",
    databaseURL: "https://awardsredfork.firebaseio.com",
    projectId: "awardsredfork",
    storageBucket: "awardsredfork.appspot.com",
    messagingSenderId: "595538517449"
  });


const base= Rebase.createClass(firebaseApp.database());

const storage = firebaseApp.storage();

export{firebaseApp};

export { 
   storage, base, firebase as default
};

