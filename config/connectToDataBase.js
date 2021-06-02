import config from 'config';
import firebase from 'firebase';
var firebaseConfig = {
    apiKey: 'AIzaSyB8vGX3QbxahZ8euQviNLTHTB8gPVxFM6k',
    authDomain: 'react-thebackdoor.firebaseapp.com',
    projectId: 'react-thebackdoor',
    storageBucket: 'react-thebackdoor.appspot.com',
    messagingSenderId: '920210020669',
    appId: '1:920210020669:web:02fb6f59678cd055644d54',
    measurementId: 'G-4G45L5S9JR',
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

firebase.analytics();

//!Elad
export default function () {
    //firebase stuff
    console.log('firebase stuff');

    //this is how u use config
    console.log(`config var: ${config.get('var')}`);

    //we need to store the prefix
}
