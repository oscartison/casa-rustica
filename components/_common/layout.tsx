import { useTranslation } from 'next-i18next';
import { styled } from 'styled-components';
import { HeaderResponsive } from './header';
import { Container, Group, Paper,Text } from '@mantine/core';
import Link from 'next/link';

const Main = styled.main`
  min-height: 100dvh;
  min-width: 71.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2e9dd ;
  padding-top: 2rem;
  `;

const Content = styled.div`
  flex: 1 1 0;
`;

const Layout = ({ children }) => {
  const {t} = useTranslation()
  return (
    <Main>
       
      <Paper
        radius="md"
        shadow="sm"
        style={{
          backgroundColor: "white",
          minWidth: "80vw",
          margin: "0 auto",
          marginBottom: "2rem",
        }}
      >
      <HeaderResponsive links={[{ link: '/', label: t('home') },{ link: '/pictures', label: t('pictures') },{ link: '/contact', label: t('contact') }]}/>
      <Content style={{
          minWidth: "71.25rem",
          
        }}>{children}</Content>
      <Container size="lg" bg="#ccb9a0ff" py={30} miw="80vw" style={{borderRadius:"0.5rem"}}
>
        <Group position="apart" maw="71.25rem" m="auto">
                    <Text size="sm">© {new Date().getFullYear()} Casa Rustica</Text>
          <Group spacing="md">
            <Link href="/contact" >
            <Text size="sm">Contact</Text>
            </Link>
          </Group>
        </Group>
      </Container>
      </Paper>
    </Main>
  );
};


export default Layout;


