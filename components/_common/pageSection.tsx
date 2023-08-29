import * as React from 'react';
import styled from 'styled-components';

import { mediaQueries } from '../../styles/theme';

const Section = styled.div<{ $backgroundColor: string }>`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  padding: 0 1rem;
  width: 100%;
  overflow: hidden;

  ${mediaQueries.medium`
   padding: 0 4rem;
  `};
`;

type Props = {
  children: React.ReactNode;
  backgroundColor: string;
};

const PageSection = ({ children, backgroundColor }: Props) => {
  return <Section $backgroundColor={backgroundColor}>{children}</Section>;
};

export default PageSection;
