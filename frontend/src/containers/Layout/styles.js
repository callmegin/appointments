import styled from 'styled-components';
import { device, FlexDiv } from 'shared/styles';

export const MainContainer = styled(FlexDiv)`
  height: 100%;
  @media ${device.mobile} {
    height: auto;
  }
`;

export const Test = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  background: blue;
`;
