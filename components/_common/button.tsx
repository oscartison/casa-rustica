import Link from 'next/link';
import { styled } from 'styled-components';

import ArrowSVG from '../../app/icons/arrowRight.svg';
import { colors, fontWeights } from '../../styles/theme';

const StyledButton = styled.button<{
  $disabled?: boolean;
  $error?: boolean;
  $done?: boolean;
  $variant?: string;
  $fullWidth: boolean;
}>`
  border: ${({ $variant }) =>
    $variant === 'contact'
      ? `2px solid ${colors.detailsLight}`
      : `2px solid ${colors.primary}`};
  border-radius: 0.5rem;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'fit-content')};
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: ${({ $disabled, $error, $done, $variant }) => {
    if ($done) return 'green';
    if ($error) return 'red';
    if ($disabled) return colors.details;
    if ($variant === 'primary') return colors.primary;
    if ($variant === 'secondary') return colors.white;
    if ($variant === 'contact') return colors.transparent;
    return colors.primary;
  }};
  cursor: ${({ $disabled }) => ($disabled ? 'normal' : 'pointer')};
`;
const StyledText = styled.p<{ $variant?: string }>`
  color: ${({ $variant }) => {
    if ($variant === 'primary') return colors.white;
    if ($variant === 'secondary') return colors.primary;
    if ($variant === 'contact') return colors.transparent;
    return colors.primary;
  }};
  font-weight: ${fontWeights.bold};
`;

const Flex = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
`;

type ButtonProps = {
  text?: string;
  href?: string;
  disabled?: boolean;
  error?: boolean;
  done?: boolean;
  type?: 'button' | 'reset' | 'submit';
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'contact';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  target?: string;
  rel?: string;
  hideIcon?: boolean;
  linkAs?: string;
};

const StyledArrowSVG = styled(ArrowSVG)<{ $variant?: string }>`
  > path {
    fill: ${({ $variant }) =>
      $variant === 'primary' ? colors.white : colors.primary};
  }
`;

const Button = ({
  href,
  text,
  type,
  disabled,
  error,
  done,
  target,
  rel,
  onClick,
  className,
  variant,
  hideIcon,
  linkAs,
  fullWidth = false,
  icon = <StyledArrowSVG $variant={variant} />,
}: ButtonProps) => {
  if (type && type === 'button' && href !== undefined) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        as={linkAs}
        style={{ width: fullWidth ? '100%' : 'fit-content' }}
      >
        <StyledButton
          type={type}
          disabled={disabled}
          $disabled={disabled}
          $error={error}
          $done={done}
          $variant={variant}
          className={className}
          $fullWidth={fullWidth}
        >
          <Flex>
            <StyledText $variant={variant}>{text ?? 'Get started'}</StyledText>
            {!hideIcon && icon}
          </Flex>
        </StyledButton>
      </Link>
    );
  }
  return (
    <StyledButton
      type={type}
      disabled={disabled}
      $disabled={disabled}
      $error={error}
      $done={done}
      onClick={onClick}
      $variant={variant}
      className={className}
      $fullWidth={fullWidth}
    >
      <StyledText $variant={variant}>{text ?? 'Get started'}</StyledText>
    </StyledButton>
  );
};

export default Button;
