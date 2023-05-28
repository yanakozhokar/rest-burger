import { MenuForm } from 'components/MenuForm/MenuForm';
import { Menu } from 'components/Menu/Menu';
import './Order.css';

export const Order = () => {
  return (
    <div className="order container">
      <aside className="order__sidebar-left">
        <MenuForm />
        <Menu />
      </aside>
    </div>
  );
};
