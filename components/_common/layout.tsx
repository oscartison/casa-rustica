import { styled } from 'styled-components';

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Metropolis';
`;

const Content = styled.div`
  flex: 1 1 0;
`;

const Layout = ({ children }) => {
  return (
    <Main>
      <Content>{children}</Content>
    </Main>
  );
};


export default Layout;
