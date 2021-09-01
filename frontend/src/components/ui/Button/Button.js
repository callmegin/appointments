import {
  IconNext,
  IconPrev,
  StyledHollowButton,
  StyledFilledButton,
} from './styles';

const Button = (Component, props) => {
  const { children, clicked, ...rest } = props;
  return (
    <Component onClick={clicked} props={rest}>
      {children}
    </Component>
  );
};

export const IconNextButton = (props) => Button(IconNext, props);
export const IconPrevButton = (props) => Button(IconPrev, props);

//isTaken, isAvailable
export const HollowButton = (props) => Button(StyledHollowButton, props);
//isSelected
export const FilledButton = (props) => Button(StyledFilledButton, props);
