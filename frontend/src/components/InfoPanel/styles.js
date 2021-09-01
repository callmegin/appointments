import { device, FlexDiv } from 'shared/styles';
import styled from 'styled-components';

export const InfoPanel = styled(FlexDiv)`
  flex: 0 1 600px;
  height: 550px;
  @media ${device.mobile} {
    flex: auto;
    height: ${({ keepHeight }) => (keepHeight ? '550px' : 'auto')};
  }
`;

export const Container = styled(FlexDiv)`
  height: 100%;
  margin: 4rem 0;
  padding: 0 1rem;
  overflow-y: auto;
`;
