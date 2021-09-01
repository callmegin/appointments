import styled from 'styled-components';
import { device } from 'shared/styles';

export const Calendar = styled.div`
  flex: 0 1 750px;
  z-index: 90;
  background: rgb(80, 112, 150);
  background: linear-gradient(
    156deg,
    rgba(80, 112, 150, 1) 39%,
    rgba(67, 101, 139, 1) 100%
  );
  @media ${device.mobile} {
    flex: auto;
  }
`;

export const Button = styled.div`
  cursor: pointer;
`;
