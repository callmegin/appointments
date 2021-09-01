import * as s from './styles';
const Info = () => {
  return (
    <s.Info alignCenter justifyCenter>
      <s.Text>Pasirinkite datą registracijai</s.Text>
      <s.Warning>Anksčiausia registracija galima tik sekančią dieną</s.Warning>
    </s.Info>
  );
};

export default Info;
