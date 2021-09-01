import { device, FlexDiv } from 'shared/styles';
import styled from 'styled-components';

export const Container = styled(FlexDiv)`
  flex: 0 1;
  padding: 0.5rem;
`;

export const Wrapper = styled(FlexDiv)`
  flex: 0 1 1350px;
  margin: 1rem;
  box-shadow: 0px 7px 10px 1px rgba(53, 57, 61, 0.4);
  @media ${device.mobile} {
    flex-direction: column;
    justify-content: flex-start;
  }
`;
