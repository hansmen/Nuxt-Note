import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const config = {
  apiKey: 'AIzaSyCJYylSWsZFlMJthUIjyMxVJBnjAaSWQ0k',
  authDomain: 'vue-firebase-c2b20.firebaseapp.com',
  databaseURL: 'https://vue-firebase-c2b20.firebaseio.com',
  projectId: 'vue-firebase-c2b20',
  storageBucket: 'vue-firebase-c2b20.appspot.com',
  messagingSenderId: '30913046473',
  appId: '1:30913046473:web:dfccf8e543ad4c2cfa2a18',
  measurementId: 'G-L099VJQDXN',
};

const firebaseApp = firebase.initializeApp(config);

const firestore = firebaseApp.firestore();
firestore.settings({ timestampsInSnapshots: true });

export default firestore;
