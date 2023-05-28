import { Logo } from 'components/Logo/Logo';
import { Menu } from 'components/Menu/Menu';
import './Header.css';

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__top">
          <div className="container">
            <Logo />
            <a href="tel:+12122100020" class="header__tel">
              +12122100020
            </a>
          </div>
        </div>
        <div className="container">
          <Menu />
        </div>
      </header>
    </>
  );
};
