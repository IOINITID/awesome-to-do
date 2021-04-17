import styled, { css } from 'styled-components';
import theme from 'styled-theming';

const themeInfoTitleColor = theme('mode', {
  light: '#5e647c',
  dark: '#ffffff',
});

const themeInfoDescriptionColor = theme('mode', {
  light: '#727272',
  dark: '#9f9f9f',
});

export const StyledInfo = styled.section<{ search?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;

  svg {
    position: absolute;
    top: 130px;
    right: 81px;
    width: 523px;
    height: 488px;
  }

  ${(props) =>
    props.search &&
    css`
      svg {
        position: absolute;
        top: 142px;
        right: 90px;
        width: 508px;
        height: 476px;
      }
    `}
`;

export const StyledTitle = styled.h2`
  margin: 0;
  margin-top: 30px;
  margin-bottom: 30px;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  font-family: 'SF Pro Display', 'Arial', sans-serif;
  color: ${themeInfoTitleColor};
`;

export const StyledInfoDescription = styled.p`
  margin: 0;
  padding-left: 2px;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  font-family: 'SF Pro Display', 'Arial', sans-serif;
  color: ${themeInfoDescriptionColor};
`;

export const StyledInfoIcon = styled.div<{ all?: boolean; search?: boolean; about?: boolean }>`
  position: absolute;
  top: 130px;
  right: 81px;
  width: 523px;
  height: 488px;
`;
