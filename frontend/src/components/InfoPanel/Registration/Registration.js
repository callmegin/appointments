import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBooking, reset } from 'store/bookingSlice';
import Input from 'components/ui/Input';
import { FilledButton } from 'components/ui/Button';
import { getIsoDateString } from 'lib/date';
import ErrorModal from 'components/ui/ErrorModal';
import Loading from 'components/ui/Loading';
import * as s from './styles';

const Registration = ({ clickedBack, selectedSlot }) => {
  const { error: responseError, status } = useSelector(
    (state) => state.booking
  );
  const [nameValues, setNameValues] = useState({
    name: '',
    surname: '',
  });
  const [error, setError] = useState({
    name: '',
    surname: '',
  });
  const [enableButton, setEnableButton] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (nameValues.name && nameValues.surname && !error.name && !error.surname)
      setEnableButton(true);
    else setEnableButton(false);
  }, [nameValues.name, nameValues.surname, error.name, error.surname]);

  useEffect(() => {
    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  const handleRegistration = (e) => {
    e.preventDefault();
    dispatch(
      createBooking({
        user: {
          name: nameValues.name,
          surname: nameValues.surname,
        },
        slot: {
          slotStart: getIsoDateString(new Date(selectedSlot)),
        },
      })
    );
  };

  const changedHandler = (variable, value) => {
    const pattern = /^[A-ž]*$/;
    const match = value.match(pattern);
    setNameValues({ ...nameValues, [variable]: value });
    if (match) {
      error[variable] && setError({ ...error, [variable]: '' });
    } else {
      setError({ ...error, [variable]: 'Galima naudoti tik raides' });
    }
  };

  const handleErrorModal = () => {
    dispatch(reset());
  };

  let content = (
    <>
      <s.Title>Registracija</s.Title>
      <s.SlotInfo>
        <p>Pasirinktas laikas</p>
        <s.Slot>{selectedSlot.replace('T', ' ').slice(0, -7)}</s.Slot>
      </s.SlotInfo>

      <form onSubmit={handleRegistration}>
        <Input
          center={true}
          placeholder="Vardas"
          type="text"
          required={true}
          autocomplete="on"
          value={nameValues.name}
          changed={(e) => changedHandler('name', e.target.value)}
          error={error.name}
        />
        <Input
          center={true}
          placeholder="Pavardė"
          type="text"
          required={true}
          autocomplete="on"
          value={nameValues.surname}
          changed={(e) => changedHandler('surname', e.target.value)}
          error={error.surname}
        />

        <s.ButtonBottom>
          <FilledButton enabled={true} clicked={() => clickedBack()}>
            Grįžti
          </FilledButton>
          <FilledButton enabled={enableButton}>Registruotis</FilledButton>
        </s.ButtonBottom>
      </form>
    </>
  );
  if (status === 'loading') {
    content = <Loading />;
  } else if (status === 'succeeded') {
    content = (
      <>
        <h2>Registracija sėkminga</h2>
        <s.ButtonBottom>
          <FilledButton enabled={true} clicked={() => clickedBack()}>
            Grįžti
          </FilledButton>
        </s.ButtonBottom>
      </>
    );
  }

  return (
    <s.Registration justifyCenter>
      {responseError && (
        <ErrorModal message={responseError} onConfirmed={handleErrorModal} />
      )}
      {content}
    </s.Registration>
  );
};
//enabled={enableNextButton} clicked={clickedNext}
export default Registration;
