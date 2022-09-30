import CategoryCard from './CategoryCard';
import styles from './AllCards.module.scss';
import NoCard from './NoCard';
import AddAmount from './modais/AddAmount';
import SubtractAmount from './modais/SubtractAmount';
import TransferAmount from './modais/TransferAmount';
import EditCategory from './modais/EditCategory';
import AddCategory from './modais/AddCategory';
import useGetDocs from '../../hooks/useGetDocs';
import { useSelector } from 'react-redux';

const AllCards = () => {
  const { categories } = useSelector((state) => state.app);

  const cards = categories.map((category) => (
    <CategoryCard key={category.id} data={category} />
  ));

  return (
    <>
      <AddAmount />
      <SubtractAmount />
      <TransferAmount />
      <EditCategory />
      <AddCategory />

      <section className={styles.section}>
        {cards}
        <NoCard />
      </section>
    </>
  );
};

export default AllCards;
