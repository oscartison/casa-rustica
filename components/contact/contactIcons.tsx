import { IconAt, IconMapPin, IconPhone } from '@tabler/icons-react';
import { useTranslation } from 'next-i18next';
import styled from 'styled-components';

import { colors } from '../../styles/theme';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;

  > span {
    display: grid;
    place-items: center;
    flex-shrink: 0;
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 999px;
    background: rgba(251, 247, 241, 0.1);
    color: ${colors.linen};
  }

  small {
    display: block;
    font-size: 0.75rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(251, 247, 241, 0.6);
  }

  a,
  p {
    font-size: 1.05rem;
    color: ${colors.cream};
  }

  a:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;

const CONTACTS = [
  { title: 'email', description: 'info@casarustica.be', href: 'mailto:info@casarustica.be', icon: IconAt },
  { title: 'phone', description: '+32 475 85 63 19', href: 'tel:+32475856319', icon: IconPhone },
  { title: 'address', description: 'Sparrenboslaan 26, 8420 De Haan', icon: IconMapPin },
];

export function ContactIconsList() {
  const { t } = useTranslation('home');

  return (
    <List>
      {CONTACTS.map((item) => (
        <Item key={item.title}>
          <span>
            <item.icon size={20} stroke={1.5} />
          </span>
          <div>
            <small>{t(item.title)}</small>
            {item.href ? <a href={item.href}>{item.description}</a> : <p>{item.description}</p>}
          </div>
        </Item>
      ))}
    </List>
  );
}
