import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';
import styled from 'styled-components';

import CloseSVG from '../../app/icons/close.svg';
import HamburgerSVG from '../../app/icons/menu.svg';
import AVMSFXLogo from '../../app/logos/logoAVMSFX.svg';
import useMediaQuery from '../../hooks/useMediaQuery';
import {
  colors,
  fontWeights,
  mediaQueries,
  screenSizes,
} from '../../styles/theme';
import Button from '../_common/button';

const LogoAndLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3.25rem;
  justify-content: space-between;
  margin-left: 0.5rem;

  ${mediaQueries.medium`
    justify-content: unset;
  `}
`;

const HeaderContainer = styled.div<{ $isDryHire: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0;
  background-color: ${({ $isDryHire }) =>
    $isDryHire ? colors.white : colors.text};
  max-width: 100%;
  justify-content: space-between;

  ${mediaQueries.medium`
    align-items: center;
    justify-content: unset;
    gap: 2.25rem;
    flex-direction: row;
    padding: 1.75rem 4rem 0 1.75rem;
  `}

  ${mediaQueries.large`
    gap: 3.25rem;
  `}
`;

const LinksContainer = styled.div<{ $visible: boolean }>`
  display: ${({ $visible }) => ($visible ? 'flex' : 'none')};
  align-items: center;
  gap: 2rem;
  flex-direction: column;
  flex: 1 1 0;

  ${mediaQueries.medium`
    flex-direction: row;
    gap: 1.25rem;
  `}

  ${mediaQueries.large`
    gap: 3rem;
  `}
`;

const LinkText = styled.p<{ $isActive: boolean; $isDryHire: boolean }>`
  font-size: 1.25rem;
  font-weight: ${fontWeights.light};
  line-height: 1.2;
  color: ${({ $isActive, $isDryHire }) => {
    if ($isDryHire) {
      if ($isActive) {
        return colors.primary;
      }
      return colors.text;
    }
    return colors.white;
  }};
  padding: 0.25rem 0.5rem;

  /* Border corners when tab is active. */
  background: ${({ $isActive }) =>
    $isActive
      ? `
    linear-gradient(to right, ${colors.primary} 3px, transparent 3px) 0 0,
    linear-gradient(to left, ${colors.primary} 3px, transparent 3px) 100% 100%,
    linear-gradient(to bottom, ${colors.primary} 3px, transparent 3px) 0 0,
    linear-gradient(to top, ${colors.primary} 3px, transparent 3px) 100% 100%;
  `
      : 'unset'};

  background-repeat: no-repeat;
  background-size: 10px 10px;

  ${mediaQueries.medium`
      font-size: 1rem;
      font-weight: ${fontWeights.medium};
  `}

  ${mediaQueries.large`
      font-size: 1.25rem;
  `}
`;

const StyledLogo = styled(AVMSFXLogo)<{ $isDryHire: boolean }>`
  > g > path:nth-child(2) {
    fill: ${({ $isDryHire }) => ($isDryHire ? colors.black : colors.white)};
  }
`;

const Overlay = styled.div<{ $isDryHire: boolean }>`
  height: 100vh;
  width: 100%;
  background-color: ${({ $isDryHire }) =>
    $isDryHire ? colors.white : colors.text};
  z-index: 9999;
  margin-top: 2rem;
`;

const ContactButton = styled(Button)<{ $isDryHire: boolean }>`
  > div > p {
    font-size: 1.25rem;
    color: ${({ $isDryHire }) => ($isDryHire ? colors.text : colors.white)};
    font-weight: ${fontWeights.light};
  }

  ${mediaQueries.medium`
    > div > p {
     font-size: 1rem;
     font-weight: ${fontWeights.bold}; 
    }
  `}
`;

const ButtonWrapper = styled.div`
  ${mediaQueries.medium`
      margin-left: auto;
  `}
`;

const IconButton = styled.button<{ $isDryHire: boolean }>`
  height: 4rem;
  width: 4rem;
  border: none;
  background-color: ${colors.transparent};
  &:hover {
    cursor: pointer;
  }

  > svg > path {
    fill: ${({ $isDryHire }) => ($isDryHire ? colors.primary : colors.white)};
  }
`;

type LinkType = {
  path: string;
  active: boolean;
  isVisible: boolean;
  name: string;
};

type LinksProps = {
  links: LinkType[];
  isSmall: boolean;
  showLinks: boolean;
  isDryHire: boolean;
};

const Links = ({ links, isSmall, showLinks, isDryHire }: LinksProps) => {
  return (
    <LinksContainer $visible={!isSmall || showLinks}>
      {links
        .filter((link) => link.isVisible)
        .map((link) => (
          <Link key={link.name} href={link.path}>
            <LinkText $isActive={link.active} $isDryHire={isDryHire}>
              {link.name}
            </LinkText>
          </Link>
        ))}
      <ButtonWrapper>
        <ContactButton
          $isDryHire={isDryHire}
          type="button"
          href="/contact"
          text="Contact"
          hideIcon
          variant="contact"
        />
      </ButtonWrapper>
    </LinksContainer>
  );
};

const Header = () => {
  const [showLinks, setShowLinks] = React.useState(false);
  const pathname = usePathname();
  const isSmall = useMediaQuery(`(max-width: ${screenSizes.medium - 1}px)`);

  // /contact should have the same theme as dry-hire.
  const isDryHire = React.useMemo<boolean>(() => {
    return (
      (pathname?.includes('dry-hire') || pathname?.includes('contact')) ?? false
    );
  }, [pathname]);

  const links = React.useMemo<LinkType[]>(() => {
    if (pathname === null) {
      return [];
    }
    return [
      {
        path: '/',
        active: pathname === '/',
        isVisible: false,
        name: 'Landingpage',
      },
      {
        path: '/dry-hire/home',
        active: pathname === '/dry-hire/home',
        isVisible: pathname.includes('dry-hire'),
        name: 'Home',
      },
      {
        path: '/sfx-production/home',
        active: pathname === '/sfx-production/home',
        isVisible: pathname.includes('sfx-production'),
        name: 'Home',
      },
      {
        path: '/dry-hire/about',
        active: pathname === '/dry-hire/about',
        isVisible: pathname.includes('dry-hire'),
        name: 'About',
      },
      {
        path: '/sfx-production/about',
        active: pathname === '/sfx-production/about',
        isVisible: pathname.includes('sfx-production'),
        name: 'About',
      },
      {
        path: '/sfx-production/projects',
        active: pathname === '/sfx-production/projects',
        isVisible: pathname.includes('sfx-production'),
        name: 'Projects',
      },
      {
        path: '/dry-hire/catalog',
        active: pathname === '/dry-hire/catalog',
        isVisible: pathname.includes('dry-hire'),
        name: 'Catalog',
      },
      {
        path: '/dry-hire/distribution',
        active: pathname === '/dry-hire/distribution',
        isVisible: pathname.includes('dry-hire'),
        name: 'Distribution',
      },
      {
        path: '/dry-hire/support',
        active: pathname === '/dry-hire/support',
        isVisible: pathname.includes('dry-hire'),
        name: 'Support',
      },
    ];
  }, [pathname]);

  const toggleShowLinks = React.useCallback(() => {
    setShowLinks((prev) => !prev);
  }, []);

  // Disable scrolling when hamburger menu is open.
  React.useEffect(() => {
    if (showLinks) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showLinks]);

  // Close menu when pathname changes.
  React.useEffect(() => {
    setShowLinks(false);
  }, [pathname]);

  return (
    <HeaderContainer $isDryHire={isDryHire}>
      <LogoAndLinks>
        <Link href="/">
          <StyledLogo $isDryHire={isDryHire} />
        </Link>
        {isSmall && (
          <IconButton
            $isDryHire={isDryHire}
            type="button"
            onClick={toggleShowLinks}
          >
            {showLinks ? <CloseSVG /> : <HamburgerSVG />}
          </IconButton>
        )}
      </LogoAndLinks>
      {isSmall && showLinks ? (
        <Overlay $isDryHire={isDryHire}>
          <Links
            isSmall={isSmall}
            links={links}
            showLinks={showLinks}
            isDryHire={isDryHire}
          />
        </Overlay>
      ) : (
        <Links
          isSmall={isSmall}
          links={links}
          showLinks={showLinks}
          isDryHire={isDryHire}
        />
      )}
    </HeaderContainer>
  );
};

export default Header;
