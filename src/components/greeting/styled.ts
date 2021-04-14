import styled from 'styled-components';
import theme from 'styled-theming';

const themeGreetingTitleColor = theme('mode', {
  light: '#6d90ff',
  dark: '#f9e4b0',
});

const themeGreetingDescriptionColor = theme('mode', {
  light: '#5e647c',
  dark: '#ffffff',
});

export const StyledGreeting = styled.section`
  display: flex;
  margin-top: 129px;
`;

export const StyledGreetingInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  margin-right: auto;
`;

export const StyledGreetingTitle = styled.h2`
  margin: 0;
  margin-bottom: 20px;
  font-weight: 800;
  font-size: 72px;
  line-height: 86px;
  font-family: 'SF Pro Display', 'Arial', sans-serif;
  color: ${themeGreetingTitleColor};
  letter-spacing: 0.03em;
`;

export const StyledGreetingDescription = styled.p`
  max-width: 690px;
  margin: 0;
  font-weight: 700;
  font-size: 48px;
  line-height: 100%;
  font-family: 'SF Pro Display', 'Arial', sans-serif;
  color: ${themeGreetingDescriptionColor};
  letter-spacing: 0.03em;
`;
