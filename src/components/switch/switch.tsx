import React, { ReactElement } from 'react';
import Button from '../button';
import { StyledSwitch } from './styled';

const Switch = ({ children, ...props }: { children?: ReactElement; active: boolean; onClick?: () => void }) => {
  return (
    <StyledSwitch {...props}>
      <Button>{children}</Button>
    </StyledSwitch>
  );
};

export default Switch;
