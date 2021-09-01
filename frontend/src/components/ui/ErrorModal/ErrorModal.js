import React from 'react';
import ReactDOM from 'react-dom';
import { HollowButton } from 'components/ui/Button';
import * as s from './styles';

const Backdrop = () => {
  return <s.Backdrop />;
};

const Modal = ({ message, confirmed }) => {
  return (
    <s.ModalContainer justifyCenter alignCenter>
      <s.Modal justifyCenter alignCenter>
        <h2>💥 BOOM</h2>
        <s.Content>
          <p>{message}</p>
        </s.Content>
        <div>
          <HollowButton clicked={confirmed}>Sad ok...</HollowButton>
        </div>
      </s.Modal>
    </s.ModalContainer>
  );
};

const ErrorModal = ({ message, onConfirmed }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop confirmed={onConfirmed} />,
        document.getElementById('backdrop')
      )}
      {ReactDOM.createPortal(
        <Modal message={message} confirmed={onConfirmed} />,
        document.getElementById('overlay')
      )}
    </>
  );
};

export default ErrorModal;
