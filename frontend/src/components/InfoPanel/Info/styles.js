import { FlexDiv } from 'shared/styles';
import styled from 'styled-components';

export const Info = styled(FlexDiv)`
  height: 100%;
  padding: 0 1rem;
`;

export const Text = styled.p`
  font-size: 1.8rem;
  text-align: center;
`;

export const Warning = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;
  color: var(--darkred);
`;
