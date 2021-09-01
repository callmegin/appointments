import { LT_MONTHS } from '../utils/calendarConstants';
import { IconNextButton, IconPrevButton } from 'components/ui/Button';

import * as s from './styles';

const Header = ({ year, month, clicked }) => {
  return (
    <s.Header row justifyBetween alignCenter key={month}>
      <IconPrevButton clicked={() => clicked(false, true)} />

      <s.Year column>
        <s.HText>{year}</s.HText>
        <s.HText>{LT_MONTHS[month]}</s.HText>
      </s.Year>

      <IconNextButton clicked={() => clicked(true, false)} />
    </s.Header>
  );
};

export default Header;
