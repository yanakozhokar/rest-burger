import { BiSearch } from 'react-icons/bi';
import './Order.css';

export const Order = () => {
  return (
    <div className="order container">
      <aside className="menu__sidebar">
        <form className="menu__form">
          <input
            type="text"
            name="dish-request"
            placeholder="Search"
            className="menu__form-input"
          />
          <button
            type="submit"
            width="40"
            height="44"
            className="menu__form-btn"
          >
            <BiSearch className="menu__form-icon" />
          </button>
        </form>
      </aside>
    </div>
  );
};
