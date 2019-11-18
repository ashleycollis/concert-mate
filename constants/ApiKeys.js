import * as firebase from 'firebase';
export default firebaseConfig = {
  apiKey: 'AIzaSyCKW1yduXN7306D-WARMB37OyhSm0_NwsA',
  authDomain: 'concert-mate.firebaseapp.com',
  databaseURL: 'https://concert-mate.firebaseio.com',
  projectId: 'concert-mate',
  storageBucket: 'concert-mate.appspot.com',
  messagingSenderId: '1070316976379',
  appId: '1:1070316976379:web:fe292d5cc9e02ff311585e',
  measurementId: 'G-K55M3XK2VE',
};
firebase.initializeApp(firebaseConfig);
export const db = firebase.database();
export const ticketMasterApiKey = 'avH3skz2A2xNBfgdXo4A3OZoaZF66Bpf';
