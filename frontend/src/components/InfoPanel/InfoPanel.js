import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Info from './Info';
import Slots from './Slots';
import Registration from './Registration';
import Loading from 'components/ui/Loading';
import * as s from './styles';

const InfoPanel = () => {
  const slotsState = useSelector((state) => state.slots);
  const { selectedDay } = useSelector((state) => state.calendar);

  const [clickedNext, setClickedNext] = useState(false);

  useEffect(() => {
    setClickedNext(false);
  }, [selectedDay]);

  let content;

  if (slotsState.status === 'idle') {
    content = <Info text={'text'} warning={'warning'} />;
  } else if (slotsState.status === 'loading') {
    content = <Loading />;
  } else if (slotsState.status === 'succeeded') {
    content = clickedNext ? (
      <Registration
        clickedBack={() => setClickedNext((prev) => !prev)}
        selectedSlot={slotsState.selectedSlot}
      />
    ) : (
      <Slots
        availableSlots={slotsState.availableSlots}
        takenSlots={slotsState.takenSlots}
        clickedNext={() => setClickedNext((prev) => !prev)}
      />
    );
  }

  return (
    <s.InfoPanel alignCenter keepHeight={selectedDay}>
      <s.Container justifyCenter>{content}</s.Container>
    </s.InfoPanel>
  );
};

export default InfoPanel;
