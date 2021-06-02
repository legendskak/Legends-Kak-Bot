import config from 'config';
import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/analytics';

var firebaseConfig = {
  apiKey: "AIzaSyBylRAbrNUWQRkppjgE6vwr11Xaue70vls",
  authDomain: "legends-bot-6a482.firebaseapp.com",
  projectId: "legends-bot-6a482",
  storageBucket: "legends-bot-6a482.appspot.com",
  messagingSenderId: "801454364629",
  appId: "1:801454364629:web:85cd14c5bd2d83869acf5c",
  measurementId: "G-G107FR5SGK"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
firebase.analytics();

async function getDocData(data) {
  const doc = await data.get();
  return doc.data();
}


function docData(doc) {
  getDocData(doc).then((result) => {

  });
}

export default function () {
  const serverName = "LEGENDS"; //later will update to make it read server name
  const db = firebase.firestore();
  const guildData = db.collection("guild-data");
  const guild = guildData.doc(serverName);
  const serverData = guild.collection(serverName + "-GUILD-DATA");
  const prefixData = serverData.doc("prefix");


}

