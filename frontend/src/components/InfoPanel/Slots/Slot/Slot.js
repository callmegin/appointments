import { HollowButton } from 'components/ui/Button';

const Slot = ({ clicked, text, isAvailable, isTaken, isSelected }) => {
  //TODO: isActive/isTaken
  return (
    <>
      <HollowButton
        clicked={clicked}
        isAvailable={isAvailable}
        isTaken={isTaken}
        isSelected={isSelected}
      >
        {text}
      </HollowButton>
    </>
  );
};

export default Slot;
