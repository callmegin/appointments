import styled from 'styled-components';
import { cubicBezier, warningLeft } from 'shared/styles';

export const Container = styled.div`
  display: flex;
  width: ${({ width }) => (width ? width : '100%')};
  position: relative;
  margin-bottom: ${({ noMargin }) => (noMargin ? '0' : '1.8rem')};
`;

export const Border = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  border: 0px;
`;

export const Input = styled.input`
  width: 100%;
  display: block;
  height: 3rem;
  padding-left: ${(props) => (!props.center ? '1rem' : null)};
  font-size: 1.6rem;
  font-weight: 600;
  text-align: ${(props) => (props.center ? 'center' : null)};
  color: var(--darkgrey);
  word-wrap: break-word;
  border-width: 0 0 1px;
  border-radius: 0;
  border-color: var(--darkgrey);
  outline: none;
  &::placeholder {
    font-weight: normal;
  }
  &:focus ~ ${Border} {
    width: 100%;
    border: 1px solid var(--blue);
    transition: all 0.3s ${cubicBezier};
  }
`;
export const ErrorText = styled.p`
  position: absolute;
  padding: 1.2rem;
  margin-top: 3.2rem;
  margin-left: 2rem;
  font-size: 1.6rem;
  border-radius: 0 8px 8px 8px;
  z-index: 99;
  animation: ${warningLeft} 0.2s ${cubicBezier} both;
  color: var(--darkgrey);
  background-color: var(--red);
  box-shadow: 0px 11px 10px -5px rgba(156, 156, 156, 1);
`;
