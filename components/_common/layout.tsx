import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { styled } from 'styled-components';

import Footer from './footer';
import { HeaderResponsive } from './header';

const Main = styled.main`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1 1 auto;
`;

const Layout = ({ children }) => {
  const { t } = useTranslation('common');
  const router = useRouter();

  const links = [
    { link: '/', label: t('home') },
    { link: '/pictures', label: t('pictures') },
    { link: '/prices', label: t('prices') },
    { link: '/contact', label: t('contact') },
  ];

  return (
    <Main>
      <HeaderResponsive links={links} transparentOnTop={router.pathname === '/'} />
      <Content>{children}</Content>
      <Footer links={links} />
    </Main>
  );
};

export default Layout;
