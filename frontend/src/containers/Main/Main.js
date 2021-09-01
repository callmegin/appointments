import Calendar from 'components/Calendar';
import InfoPanel from 'components/InfoPanel';

import * as s from './styles';
import { useSelector } from 'react-redux';

const Main = () => {
  const { status } = useSelector((state) => state.calendar);

  let content = <div> ... </div>;

  if (status === 'succeeded') {
    content = (
      <s.Wrapper row>
        <Calendar />
        <InfoPanel />
      </s.Wrapper>
    );
  }

  return <>{content}</>;
};

export default Main;
