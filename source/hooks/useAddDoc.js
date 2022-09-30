import { addDoc, collection } from '@firebase/firestore';
import db from '../firebase';

const useAddDoc = () => {
  const addDocHandler = async (collectionName, fields) => {
    const coll = collection(db, collectionName);
    await addDoc(coll, fields);
  };

  return addDocHandler;
};

export default useAddDoc;
