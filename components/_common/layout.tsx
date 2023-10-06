import { useTranslation } from 'react-i18next';
import { styled } from 'styled-components';
import { HeaderResponsive } from './header';

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
  const {t} = useTranslation()
  return (
    <Main>
      <HeaderResponsive links={[{ link: '/', label: t('home') },{ link: '/pictures', label: t('pictures') },{ link: '/contact', label: t('contact') }]}/>
      <Content>{children}</Content>
    </Main>
  );
};


export default Layout;


