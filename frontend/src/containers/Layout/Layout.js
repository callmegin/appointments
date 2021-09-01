import * as s from './styles';

const Layout = ({ children }) => {
  return (
    <s.MainContainer row justifyCenter alignCenter>
      {children}
    </s.MainContainer>
  );
};

export default Layout;
