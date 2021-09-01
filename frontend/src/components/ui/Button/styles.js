import styled, { css } from 'styled-components';
import { cubicBezier } from 'shared/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const arrowIconStyle = css`
  && {
    font-size: 3rem;
    color: var(--light);
    &:hover {
      transform: scale(1.3);
      transition: all 0.2s;
    }
    &:active {
      transform: scale(1);
      transition: all 0.2s;
    }
  }
`;

export const IconNext = styled(ArrowForwardIosIcon)`
  ${arrowIconStyle}
`;

export const IconPrev = styled(ArrowBackIosIcon)`
  ${arrowIconStyle}
`;

const Button = styled.button`
  padding: 1rem 8rem;
  margin: 0.5rem 0;
  font-size: 1.6rem;
  font-weight: 400;
  border-radius: 0.3rem;
`;
const defaultHollowButton = css`
  background: var(--light);
  box-shadow: 0px 2px 10px -6px rgb(0 0 0 / 80%);
  border: 1px solid var(--blue);
  color: var(--darkgrey);
  cursor: pointer;
  &:hover {
    border: 1px solid var(--green);
    background: rgb(80, 150, 115, 0.1);
    box-shadow: none;
    transition: background 0.2s ${cubicBezier};
  }
`;
const selectedHolloWButton = css`
  transform: scale(0.98);
  border: 1px solid var(--green);
  background: rgb(80, 150, 115, 0.1);
  box-shadow: none;
`;
const takenHollowButton = css`
  color: var(--darkred);
  border: 1px solid var(--red);
  background: rgb(209, 146, 146, 0.1);
  box-shadow: none;
  pointer-events: none;
`;

//!Perdaryt kad default mygtukas butu butent default blet :)
export const StyledHollowButton = styled(Button)`
  ${defaultHollowButton}
  ${({ props }) => props.isSelected && selectedHolloWButton}

  ${({ props }) => !props.isTaken && props.isAvailable && css``}
  ${({ props }) => props.isTaken && takenHollowButton}
`;

export const StyledFilledButton = styled(Button)`
  border: none;
  color: white;
  font-weight: 600;
  letter-spacing: 0.2rem;
  background: var(--lightgreen);
  ${({ props }) =>
    props.enabled
      ? css`
          pointer-events: default;
          box-shadow: 0px 8px 12px -6px var(--lightgreen);
          transition: all 0.2s ${cubicBezier};
        `
      : css`
          pointer-events: none;
          background: var(--greygreen);
          box-shadow: none;
          transition: background 0.2s ${cubicBezier};
        `}
  &:hover {
    background: var(--lightgreen);
    box-shadow: none;
    transition: all 0.2s ${cubicBezier};
    cursor: pointer;
  }
`;
