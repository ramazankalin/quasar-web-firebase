import { boot } from 'quasar/wrappers';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCBiTsArKUgcQNFwSQmjllROCAAYvgMXE8',
  authDomain: 'web-quasar-final.firebaseapp.com',
  projectId: 'web-quasar-final',
  storageBucket: 'web-quasar-final.appspot.com',
  messagingSenderId: '232940388760',
  appId: '1:232940388760:web:1439224bf6c67624f06bed',
  measurementId: 'G-C9F5ECSRT4',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default boot(({ app }) => {
  app.config.globalProperties.$db = db;
});

export { db };
