import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyBm6LDmXOKL32t_dnl0aTS3PTm0FlpCRs4',
  authDomain: 'winehub-657d2.firebaseapp.com',
  databaseURL: 'https://winehub-657d2.firebaseio.com',
  projectId: 'winehub-657d2',
  storageBucket: 'winehub-657d2.appspot.com',
  messagingSenderId: '178475089242',
  appId: '1:178475089242:web:9bebd1dd283b7092800763',
  measurementId: 'G-WT2XYFJ7G9',
};
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default fire;
