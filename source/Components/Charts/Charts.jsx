import Balance from './Balance';
import CategoriesPie from './CategoriesPie';
import styles from './Charts.module.scss';

const Charts = () => {
  return (
    <section className={styles.graph}>
      <Balance />
      <CategoriesPie />
    </section>
  );
};

export default Charts;
