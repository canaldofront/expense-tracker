import db from '../firebase';
import { doc, updateDoc } from '@firebase/firestore';

const useUpdateDoc = () => {
  const updateDocHandler = async (collecion, id, updatedFields) => {
    const categoryDoc = doc(db, collecion, id);
    await updateDoc(categoryDoc, updatedFields);
  };

  return updateDocHandler;
};

export default useUpdateDoc;
