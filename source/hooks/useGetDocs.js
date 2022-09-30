import { useState, useEffect } from 'react';
import { collection, onSnapshot } from '@firebase/firestore';
import db from '../firebase';

const useGetDocs = (collectionName) => {
  const [documents, setDocuments] = useState([]);
  const coll = collection(db, collectionName);

  useEffect(() => {
    const getDocs = onSnapshot(coll, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setDocuments(data);
    });

    return () => {
      getDocs();
    };
  }, []);

  return documents;
};

export default useGetDocs;
