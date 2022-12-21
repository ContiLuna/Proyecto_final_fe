import React from "react";
import "./modal.css";

const ModalReact = (props) => {
  return (
    <div className={`modal__container ${props.show ? "active" : ""}`}>
      <div className="modal__content">
        {!props.hideCloseButton && (
          <span onClick={() => props.setShow(false)} className="modal__close">
            &times;
          </span>
        )}
        {props.children}
      </div>
    </div>
  );
};

export default ModalReact;

export const ModalHeaderReact = (props) => {
  return (
    <div className="modal__header">
      <h2>{props.children}</h2>
    </div>
  );
};

export const ModalBodyReact = (props) => {
  return <div className="modal__body">{props.children}</div>;
};

export const ModalFooterReact = (props) => {
  return <div className="modal__footer">{props.children}</div>;
};
