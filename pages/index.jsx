import { useDispatch } from 'react-redux';
import AllCards from '../source/Components/CategoryCard/AllCards';
import Charts from '../source/Components/Charts/Charts';
import Header from '../source/Components/Header/Header';
import Transactions from '../source/Components/Transactions/Transactions';
import useGetDocs from '../source/hooks/useGetDocs';
import { setCategories, setTransactions } from '../source/store/app-slice';
import styles from '../styles/initial.module.scss';

export default function Home() {
  const dispatch = useDispatch();
  dispatch(setCategories(useGetDocs('categorias')));
  dispatch(setTransactions(useGetDocs('transactions')));

  return (
    <main className={styles.main}>
      <Header />
      <AllCards />
      <Charts />
      <Transactions />
    </main>
  );
}
