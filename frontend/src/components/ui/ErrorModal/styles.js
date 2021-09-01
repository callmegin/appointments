import styled from 'styled-components';
import { FlexDiv } from 'shared/styles';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 99;
  background: rgba(0, 0, 0, 0.4);
`;

export const ModalContainer = styled(FlexDiv)`
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 9999;
`;

export const Modal = styled(FlexDiv)`
  width: 50rem;
  height: 30rem;
  padding: 2rem;
  overflow: hidden;
  background: var(--light);
  box-shadow: 0px 7px 10px 1px rgba(53, 57, 61, 0.4);
`;

export const Content = styled.div`
  padding: 2rem;
  & > p {
    font-size: 1.4rem;
  }
`;
