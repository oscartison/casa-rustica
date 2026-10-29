import { useRouter } from 'next/router';
import styled from 'styled-components';

import { colors } from '../../styles/theme';

const data = [
  { label: 'EN', name: 'English', path: 'en' },
  { label: 'NL', name: 'Nederlands', path: 'nl' },
  { label: 'FR', name: 'Français', path: 'fr' },
];

const Wrapper = styled.div<{ $light: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.15rem;
  padding: 0.2rem;
  border-radius: 999px;
  border: 1px solid ${(props) => (props.$light ? 'rgba(251, 247, 241, 0.4)' : colors.border)};
  transition: border-color 0.3s ease;
`;

const Option = styled.button<{ $active: boolean; $light: boolean }>`
  appearance: none;
  border: 0;
  cursor: pointer;
  padding: 0.35rem 0.6rem;
  border-radius: 999px;
  font: inherit;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  transition: background-color 0.2s ease, color 0.2s ease;
  color: ${(props) =>
    props.$active ? (props.$light ? colors.text : colors.cream) : props.$light ? colors.cream : colors.textSoft};
  background: ${(props) => (props.$active ? (props.$light ? colors.cream : colors.olive) : 'transparent')};

  &:hover {
    color: ${(props) => (props.$active ? undefined : props.$light ? colors.white : colors.text)};
  }
`;

export function LanguagePicker({ light = false }: { light?: boolean }) {
  const router = useRouter();

  return (
    <Wrapper $light={light} role="group" aria-label="Language">
      {data.map((item) => (
        <Option
          key={item.path}
          type="button"
          title={item.name}
          aria-pressed={router.locale === item.path}
          $active={router.locale === item.path}
          $light={light}
          onClick={() =>
            router.push({ pathname: router.pathname, query: router.query }, undefined, {
              locale: item.path,
              scroll: false,
            })
          }
        >
          {item.label}
        </Option>
      ))}
    </Wrapper>
  );
}
