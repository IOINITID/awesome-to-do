import React from 'react';
import { StyledButton } from './styled';

interface IButton {
  /**  Active state for button. */
  active?: boolean;
}

const Button = ({ children, ...props }: any) => {
  return (
    <StyledButton type={props.type || 'button'} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
