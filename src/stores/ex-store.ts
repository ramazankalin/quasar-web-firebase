import { defineStore } from 'pinia';
import { db } from 'src/boot/firebase';
import { addDoc, collection, getDocs, DocumentData } from 'firebase/firestore';

interface User {
  email: string;
  password: string;
  ad?: string;
  soyad?: string;
  hizliEmail?: string;
  hizliSifre?: string;
  isPwd?: boolean;
  group?: string[];
}

export const useMyStore = defineStore({
  id: 'myStore',
  state: () => ({
    user: {} as User,
  }),
  actions: {
    async signup(payload: User) {
      try {
        const docRef = await addDoc(collection(db, 'users'), payload);
        this.setUser(payload);
        console.log('Document added with ID: ', docRef.id);
      } catch (error) {
        console.error('Error adding document: ', error);
      }
    },
    async getData(): Promise<DocumentData[]> {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const data = querySnapshot.docs.map((doc) => doc.data());
        console.log('Data retrieved successfully: ', data);
        return data;
      } catch (error) {
        console.error('Error getting documents: ', error);
        return [];
      }
    },
    setUser(user: User) {
      this.user = user;
    },
  },
});
