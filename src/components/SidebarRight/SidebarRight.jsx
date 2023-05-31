import EmptyCart from '../../images/empty-cart.png';
import './SidebarRight.css';

export const SidebarRight = () => {
  return (
    <aside className="sidebar-right">
      <div className="sidebar-right__order">
        <p className="sidebar-right__order-title">My order</p>
        <div className="sidebar-right__order-container">
          <div className="sidebar-right__empty-cart">
            <div className="sidebar-right__empty-cart-img-container">
              <img
                src={EmptyCart}
                alt="Empty cart"
                width={174}
                height={108}
                className="sidebar-right__empty-cart-img"
              />
            </div>
            <p className="sidebar-right__empty-cart-text">Cart empty</p>
          </div>
          <a href="/" className="sidebar-right__order-confirm">
            Confirm order
          </a>
        </div>
      </div>
    </aside>
  );
};
