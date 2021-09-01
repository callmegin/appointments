import styled from 'styled-components';
import { FlexDiv } from 'shared/styles';

export const Registration = styled(FlexDiv)`
  height: 100%;
  overflow-x: hidden;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 3rem;
`;

export const SlotInfo = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  & > p {
    font-size: 1.6rem;
  }
`;

export const Slot = styled.p`
  font-weight: 600;
`;

export const ButtonBottom = styled(FlexDiv)`
  margin-top: 5rem;
`;
