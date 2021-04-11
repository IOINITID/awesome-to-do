import React, { ReactElement } from 'react';
import Button from '../button';
import { StyledSwitch } from './styled';

const Switch = ({
  children,
  ...props
}: {
  children?: ReactElement;
  active: boolean;
  onClick?: () => void;
  label?: string;
  style?: { margin: string };
}) => {
  return (
    <StyledSwitch {...props}>
      <Button aria-label={props.label}>{children}</Button>
    </StyledSwitch>
  );
};

export default Switch;
