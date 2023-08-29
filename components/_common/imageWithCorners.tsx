import Image, { type StaticImageData } from 'next/image';
import styled from 'styled-components';

import { colors, mediaQueries } from '../../styles/theme';

type Sizes = {
  small: {
    height: string;
    maxHeight: string;
    cornerWidth: string;
    cornerHeight: string;
  };
  medium: {
    width: string;
    height: string;
    maxHeight: string;
    cornerWidth: string;
    cornerHeight: string;
  };
  large: {
    maxWidth: string;
    maxHeight: string;
    cornerWidth: string;
    cornerHeight: string;
  };
};

type StyledImageProps = {
  $cornerPosition: 'left' | 'right';
  $sizes: Sizes;
};

const StyledImage = styled(Image)<StyledImageProps>`
  width: 100%;
  height: ${({ $sizes }) => $sizes.small.height};
  object-fit: cover;
  padding: 0.5rem;
  flex-grow: 1;

  /* Background corners 
    $cornerPostion === 'left' => Corners top left and bottom right
    $cornerPostion === 'right' => Corners top right and bottom left
  */
  background: ${({ $cornerPosition }) => {
    if ($cornerPosition === 'left') {
      return `linear-gradient(to right, ${colors.primary} 10px, transparent 10px) 0 0,
    linear-gradient(to left, ${colors.primary} 10px, transparent 10px) 100% 100%,
    linear-gradient(to bottom, ${colors.primary} 10px, transparent 10px) 0 0,
    linear-gradient(to top, ${colors.primary} 10px, transparent 10px) 100% 100%;`;
    }
    if ($cornerPosition === 'right') {
      return `linear-gradient(
        to right,
        ${colors.primary} 10px,
        transparent 10px
      )
      0 100%,
    linear-gradient(to left, ${colors.primary} 10px, transparent 10px) 100% 0,
    linear-gradient(to bottom, ${colors.primary} 10px, transparent 10px) 100% 0,
    linear-gradient(to top, ${colors.primary} 10px, transparent 10px) 0 100%;`;
    }
    return `none`;
  }};

  align-self: center;
  background-repeat: no-repeat;
  background-size: ${({ $sizes }) =>
    `${$sizes.small.cornerWidth} ${$sizes.small.cornerHeight}`};

  ${mediaQueries.medium`
   height: ${({ $sizes }) => $sizes.medium.height};
   max-height: ${({ $sizes }) => $sizes.medium.maxHeight};
   width: ${({ $sizes }) => $sizes.medium.width};

   background-size: ${({ $sizes }) =>
     `${$sizes.medium.cornerWidth} ${$sizes.medium.cornerHeight}`};
  `};

  ${mediaQueries.large`
   max-width: ${({ $sizes }) => $sizes.large.maxWidth};
   max-height: ${({ $sizes }) => $sizes.large.maxHeight};
   background-size: ${({ $sizes }) =>
     `${$sizes.large.cornerWidth} ${$sizes.large.cornerHeight}`};

  `};
`;

type Props = {
  src: StaticImageData | string;
  alt: string;
  cornerPosition: 'left' | 'right';
  sizes: Sizes;
  className?: string;
};

export default function ImageWithCorners({
  src,
  alt,
  cornerPosition,
  sizes,
  className,
}: Props) {
  return (
    <StyledImage
      src={src}
      alt={alt}
      className={className}
      $cornerPosition={cornerPosition}
      $sizes={sizes}
    />
  );
}
