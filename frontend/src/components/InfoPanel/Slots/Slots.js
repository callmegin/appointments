import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setSelectedSlot } from 'store/slotsSlice';
import { isSameDate } from 'lib/date';
import { getFullTime } from 'lib/time';
import { FilledButton } from 'components/ui/Button';

import Slot from './Slot/Slot';

import * as s from './styles';

const Slots = ({ availableSlots, takenSlots, clickedNext }) => {
  const { selectedDay } = useSelector((state) => state.calendar);
  const { selectedSlot } = useSelector((state) => state.slots);
  const dispatch = useDispatch();

  const [enableNextButton, setEnableNextButton] = useState(false);

  const unavailableSlots = takenSlots.map((slot) =>
    slot.slotStart.slice(0, -1)
  );
  const compareSlots = (slot) => unavailableSlots.includes(slot);

  const handleSlotClick = (date) => {
    !compareSlots(date) && dispatch(setSelectedSlot(date));
  };

  useEffect(() => {
    setEnableNextButton(selectedSlot && isSameDate(selectedDay, selectedSlot));
  }, [selectedSlot, selectedDay]);

  return (
    <s.Slots alignCenter>
      {availableSlots.map((slot, index) => {
        return (
          <Slot
            key={index}
            text={getFullTime(slot)}
            isSelected={selectedSlot === slot}
            isTaken={compareSlots(slot)}
            clicked={() => handleSlotClick(slot)}
          />
        );
      })}
      <s.ButtonBottom>
        <FilledButton enabled={enableNextButton} clicked={clickedNext}>
          Pasirinkti
        </FilledButton>
      </s.ButtonBottom>
    </s.Slots>
  );
};

export default Slots;
