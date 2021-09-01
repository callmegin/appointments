import styled, { css } from 'styled-components';
import { FlexDiv, enterElement, cubicBezier, device } from 'shared/styles';

export const Body = styled(FlexDiv)`
  width: 100%;
  flex-wrap: wrap;
  padding: 3rem 0.2rem;
  overflow: hidden;
  animation: ${enterElement} 0.2s ${cubicBezier} both;
  @media ${device.mobile} {
    padding: 0 0.2rem 1rem 0.2rem;
  }
`;

export const BodyContent = styled.div`
  height: auto;
`;
export const Days = styled(FlexDiv)`
  width: 100%;
  margin: 2rem 0;
  @media ${device.mobile} {
    margin: 0;
  }
`;
export const Day = styled.div`
  width: 14.2%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  font-weight: normal;
  user-select: none;
  color: var(--light);
`;
export const DayNumber = styled(FlexDiv)`
  width: 50px;
  height: 100%;
  cursor: pointer;
  ${({ isWeekend }) =>
    isWeekend &&
    css`
      color: var(--red);
      pointer-events: none;
    `}
  ${({ isToday }) =>
    isToday &&
    css`
      border: 2px solid var(--grey);
      transition: all 0.2s;
    `}
    ${({ isOld }) =>
    isOld &&
    css`
      pointer-events: none;
      color: var(--darkgrey);
    `}
  ${({ isSelected }) =>
    isSelected &&
    css`
      background: var(--lightgrey);
      border-radius: 50%;
      border: none;
      color: var(--darkgrey);
      animation: ${enterElement} 0.2s ${cubicBezier} both;
      transition: all 0.2s;
      ${({ isWeekend }) =>
        isWeekend &&
        css`
          color: var(--darkred);
        `}
    `}

    &:hover {
    background: var(--lightgrey);
    border-radius: 50%;
    border: none;
    color: var(--darkgrey);
    animation: ${enterElement} 0.2s ${cubicBezier} both;
    ${({ isWeekend }) =>
      isWeekend &&
      css`
        color: var(--darkred);
      `}
  }
`;
