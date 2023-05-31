import './Cart.css';

import { Link } from 'react-router-dom';

export const Cart = () => {
  return (
    <div className="cart container">
      <Link to="/" href="/" className="cart__return-btn">
        Return
      </Link>
      <section className="cart__complete">
        <form className="cart__complete-form">
          <label className="cart__complete-form-label">
            Name:
            <input
              type="text"
              name="name"
              className="cart__complete-form-input"
              required
            />
          </label>
          <label className="cart__complete-form-label">
            Phone:
            <input
              type="tel"
              name="phone"
              className="cart__complete-form-input"
              required
            />
          </label>
          <label className="cart__complete-form-label">
            Email:
            <input
              type="email"
              name="email"
              className="cart__complete-form-input"
              required
            />
          </label>
          <label className="cart__complete-form-label">
            Address:
            <input
              type="text"
              name="address"
              className="cart__complete-form-input"
              required
            />
          </label>
          <label className="cart__complete-form-label">
            Comment (optional):
            <textarea
              name="comment"
              className="cart__complete-form-comment"
            ></textarea>
          </label>
          <button type="submit" className="cart__complete-form-submit-btn">
            Submit
          </button>
        </form>
        <table className="cart__complete-table">
          <thead className="cart__complete-table-head">
            <tr className="cart__complete-table-head-row">
              <th className="cart__complete-table-head-title">Product</th>
              <th className="cart__complete-table-head-title">Amount</th>
              <th className="cart__complete-table-head-title">Total</th>
            </tr>
          </thead>
          <tbody className="cart__complete-table-body">
            <tr className="cart__complete-table-body-row">
              <td className="cart__complete-table-body-item">some</td>
              <td className="cart__complete-table-body-item">some</td>
              <td className="cart__complete-table-body-item">some</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};
