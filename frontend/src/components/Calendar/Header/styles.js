import styled from 'styled-components';
import { FlexDiv, cubicBezier, enterElement, device } from 'shared/styles';

export const Header = styled(FlexDiv)`
  font-size: 1.4rem;
  font-weight: bold;
  padding: 2rem 5rem;
  @media ${device.mobile} {
    padding: 1rem 2rem;
  }
`;
export const Year = styled(FlexDiv)`
  animation: ${enterElement} 0.2s ${cubicBezier} both;
`;
export const HText = styled.h2`
  text-align: center;
  font-size: 2rem;
  line-height: 3rem;
  text-transform: capitalize;
  font-weight: 500;
  color: var(--light);
`;
