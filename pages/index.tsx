import Image from 'next/image';
import styled from 'styled-components';

import Seo from '../components/_common/seo';
import Logo from '../app/logos/logo-no-background.png';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  background-color: #77d4fc;
`;

const Title = styled.h1`
  font-size: 3rem;
`;

const StyledLogo = styled(Image)`
  height: 15rem;
  width: 15rem;
`;

export default function LandingPage() {
  return (
    <>
      <Seo title="Casa Rustica" />
      <Container>
        <StyledLogo src={Logo} alt="logo" />
        <Title> Coming Soon ...</Title>
      </Container>
    </>
  );
}

export async function getServerSideProps() {
  return { props: {} };
}
