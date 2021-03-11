 import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCnWho2nVSvr-rU7yMaPFEoHwb2F8o6XMc",
  authDomain: "schoolattendence-b79ef.firebaseapp.com",
  databaseURL:"https://schoolattendence-b79ef-default-rtdb.firebaseio.com/",
  projectId: "schoolattendence-b79ef",
  storageBucket: "schoolattendence-b79ef.appspot.com",
  messagingSenderId: "88441953503",
  appId: "1:88441953503:web:58eb73be3bf992ccfedd6a"
};
if(!firebase.apps.length){
 firebase.initializeApp(firebaseConfig)
}
export default firebase.database();
 

console.log(firebase.name);
console.log(firebase.database());
 
 

  