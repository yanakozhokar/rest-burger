import { IoClose } from 'react-icons/io5';
import { Modal } from 'components/Modal/Modal';
import './ModalPrivacyPolicy.css';

export const ModalPrivacyPolicy = ({ togglePrivacyPolicy }) => {
  return (
    <Modal>
      <div className="modal__top">
        <h2 className="modal__top-title">Privacy policy</h2>
        <button
          type="button"
          className="modal__top-close-btn"
          onClick={togglePrivacyPolicy}
        >
          <IoClose className="modal__top-close-icon" />
        </button>
      </div>
      <div className="modal__document">
        <p className="modal__document-text">
          RESTBURGER ("Restaurant") is committed to protecting the privacy of
          all users of Restaurant’s website, or mobile applications (together,
          the "Platform"). Please read the following privacy policy that
          explains how Restaurant use and protect your information. Restaurant
          will be the "data controller" of the information you provide to
          Restaurant.
        </p>
        <ol className="modal__document-paragraph-list-primary">
          <li className="modal__document-paragraph-item-primary">
            How restaurant collect your information
            <ol className="modal__document-paragraph-list-secondary">
              <li className="modal__document-paragraph-item-secondary">
                Restaurant collect your personal information when you interact
                with Restaurant or use Restaurant’s services, such as when you
                use Restaurant’s Platform to place an order. We also look at how
                visitors use Restaurant’s Platform, to help us improve
                Restaurant’s services and optimise customer experience.
              </li>
              <li className="modal__document-paragraph-item-secondary">
                We collect information:
                <ul className="modal__document-paragraph-list-thirdly">
                  <li className="modal__document-paragraph-item-thirdly">
                    When you create an account with Restaurant or you change
                    your account settings;
                  </li>
                  <li className="modal__document-paragraph-item-thirdly">
                    When you place an order with Restaurant and during the order
                    process (including for payment and order delivery);
                  </li>
                  <li className="modal__document-paragraph-item-thirdly">
                    When you place a reservation with Restaurant;
                  </li>
                  <li className="modal__document-paragraph-item-thirdly">
                    When you contact Restaurant directly via email, phone, post,
                    message or via Restaurant’s chat function;
                  </li>
                  <li className="modal__document-paragraph-item-thirdly">
                    When you browse and use Restaurant’s Platform (before and
                    after you create an account with Restaurant).
                  </li>
                </ul>
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </Modal>
  );
};
