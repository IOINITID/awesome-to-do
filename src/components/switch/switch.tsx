import React, { ReactElement } from 'react';
import Button from '../button';
import { StyledSwitch } from './styled';

interface ISwitch {
  children?: ReactElement;
  active: boolean;
  onClick?: () => void;
  label?: string;
  style?: { margin: string };
}

const Switch = ({ children, ...props }: ISwitch) => {
  return (
    <StyledSwitch {...props}>
      <Button aria-label={props.label}>{children}</Button>
    </StyledSwitch>
  );
};

export default Switch;
