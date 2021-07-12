import { createPortal } from "react-dom";

import "./modal-window-baskte.css";

const ModalBasket = (props) => {
  const {
    isOpen = false,
    closeModalWindow,
    submitModalWindow,
    Title,
    Content,
  } = props;

  return (
    isOpen &&
    createPortal(
      <div className="modal">
        <div className="modal__header">
          <span className="modal__title">{Title}</span>
          <button onClick={closeModalWindow} className="button-close-modal">
            x
          </button>
        </div>
        <div className="content__modal">{Content}</div>
        <div className="footer__modal">
          <button onClick={submitModalWindow} className="button-submit-modal">
            Підтвердити
          </button>
        </div>
      </div>,
      document.getElementById("basket")
    )
  );
};

export default ModalBasket;
