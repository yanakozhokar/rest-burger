import { MenuForm } from 'components/MenuForm/MenuForm';
import { Menu } from 'components/Menu/Menu';
import { ReactComponent as Bell } from '../../images/bell.svg';
import './SidebarLeft.css';

export const SidebarLeft = () => {
  return (
    <aside className="sidebar-left">
      <MenuForm />
      <Menu />
      <a href="/" className="special-offers">
        <div className="special-orders-icon-container">
          <Bell width={30} height={30} className="special-offers-icon" />
        </div>
        <p className="special-orders-text">Special offers</p>
      </a>
    </aside>
  );
};
