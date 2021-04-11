import React from 'react';
import { StyledLink } from './styled';

const Link = ({ children, ...props }: any) => {
  return <StyledLink {...props}>{children}</StyledLink>;
};

export default Link;
