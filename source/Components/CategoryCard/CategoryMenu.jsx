import { useDispatch } from 'react-redux';
import useCloseMenu from '../../hooks/useCloseMenu';
import { toggleAddAmount, toggleEditCategory, toggleSubtractAmount, toggleTransferAmount } from '../../store/ui-slice';
import CardMenu from '../UI/CardMenu';

const CategoryMenu = ({ toggleMenuHandler, data }) => {
  const menuRef = useCloseMenu(toggleMenuHandler);
  const dispatch = useDispatch();

  return (
    <CardMenu ref={menuRef}>
      <li onClick={() => dispatch(toggleEditCategory(data))}>Editar</li>
      <li onClick={() => dispatch(toggleAddAmount(data))}>Adicionar</li>
      <li onClick={() => dispatch(toggleSubtractAmount(data))}>Descontar</li>
      <li onClick={() => dispatch(toggleTransferAmount(data))}>Transferir</li>
    </CardMenu>
  );
};

export default CategoryMenu;
