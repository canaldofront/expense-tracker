import { useSelector } from 'react-redux';
import TransactionCard from './TransactionCard';
import styles from './TransactionList.module.scss';

const TransactionList = ({ title, type }) => {
  const list = useSelector((state) => state.app.transactions)
    .filter((transaction) => transaction.type.toLowerCase() === type)
    .sort((a, b) => b.date?.toDate() - a.date?.toDate())
    .slice(0, 8)
    .map((el) => <TransactionCard key={el.id} transaction={el} />);

  return (
    <div className={styles.transactions}>
      <h2>{title}</h2>
      <div>
        <ul className={styles.list}>{list}</ul>
      </div>
    </div>
  );
};

export default TransactionList;
