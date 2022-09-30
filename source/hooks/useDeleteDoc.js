import { deleteDoc, doc } from '@firebase/firestore';
import db from '../firebase';

const useDeleteDoc = () => {
  const deleteDocHandler = async (collecion, id) => {
    const categoryDoc = doc(db, collecion, id);
    await deleteDoc(categoryDoc);
  };

  return deleteDocHandler;
};

export default useDeleteDoc;
