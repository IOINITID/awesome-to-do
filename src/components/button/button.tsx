import React from 'react';
import { StyledButton } from './styled';

const Button = ({ children, ...props }: any) => {
  return (
    <StyledButton type={props.type || 'button'} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
