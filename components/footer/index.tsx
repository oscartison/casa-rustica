import Link from 'next/link';
import * as React from 'react';
import styled from 'styled-components';

import Facebook from '../../app/icons/facebook.svg';
import Instagram from '../../app/icons/instagram.svg';
import LinkedIn from '../../app/icons/linkedIn.svg';
import YouTube from '../../app/icons/YouTube.svg';
import { colors, mediaQueries } from '../../styles/theme';

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 2rem;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;

  ${mediaQueries.medium`
    flex-direction: row;
    margin: 2rem 4rem;
    align-items: center;
    gap: 0;
  `}
`;

const SocialMediaContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const Text = styled.p<{ $underline?: boolean }>`
  font-size: 0.75rem;
  color: ${colors.text};
  line-height: 16px;
  text-decoration: ${({ $underline }) => ($underline ? 'underline' : 'none')};
`;

const TextContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;

  ${mediaQueries.medium`
    flex-direction: row;
  `}
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

type SocialMediaType = {
  id: number;
  link: string;
  image: React.ReactNode;
  name: string;
};

const socialMedias: SocialMediaType[] = [
  {
    id: 1,
    link: 'https://www.facebook.com/avmsfx',
    image: <Facebook />,
    name: 'Facebook',
  },
  {
    id: 2,
    link: 'https://www.youtube.com/channel/UC0zKlORLlvkQyDt3iaIHaCw',
    image: <YouTube />,
    name: 'YouTube',
  },
  {
    id: 3,
    link: 'https://www.instagram.com/avm_sfx/',
    image: <Instagram />,
    name: 'Instagram',
  },
  {
    id: 4,
    link: 'https://be.linkedin.com/company/avm-belgium-bvba',
    image: <LinkedIn />,
    name: 'LinkedIn',
  },
];

const Footer = () => {
  return (
    <FooterContainer>
      <SocialMediaContainer>
        {socialMedias.map((socialMedia) => (
          <Link
            key={socialMedia.id}
            href={socialMedia.link}
            target="_blank"
            rel="noopener noreferrer"
            title={`Open ${socialMedia.name}`}
          >
            {socialMedia.image}
          </Link>
        ))}
      </SocialMediaContainer>
      <TextContainer>
        <Text>&copy; 2023 All rights reserved</Text>
        <LinksContainer>
          <Link
            href="/AVM-SFX Privacy beleid.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text $underline>Privacy policy</Text>
          </Link>
          <Link
            href="/Algemene Voorwaarden AVM Belgium BVBA.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text $underline>Terms & conditions</Text>
          </Link>
        </LinksContainer>
      </TextContainer>
    </FooterContainer>
  );
};

export default Footer;
