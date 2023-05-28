import { Outlet } from 'react-router-dom';
// import css from './Layout.css';

export const Layout = () => {
  return (
    <>
      <header className="header">
        <div className="header__top">
          <svg width="224" height="128">
            <use href="../../images/logo.svg"></use>
          </svg>
          <a href="tel:+12122100020">+12122100020</a>
        </div>
        <nav className="nav-menu">
          <ul className="nav-menu__list">
            <li className="nav-menu__item">
              {/* <NavLink to="/">Menu</NavLink> */}
            </li>
            <li>Payment methods</li>
            <li>Service hours</li>
            <li>Reservation</li>
            <li>Feedback</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
