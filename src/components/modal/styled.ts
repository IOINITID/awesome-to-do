import styled, { css } from 'styled-components';
import theme from 'styled-theming';

const themeOverlayBackground = theme('mode', {
  light: 'rgba(0, 0, 0, 0.3)',
  dark: 'rgba(252, 252, 252, 0.3)',
});

const themeModalBackground = theme('mode', {
  light: 'linear-gradient(94.91deg, #f6faff 54.23%, #dfe9fd 92.54%)',
  dark: 'linear-gradient(140.98deg, #3a3d4e 19.26%, #1f1523 66.6%)',
});

const themeModalBoxShadow = theme('mode', {
  light: 'none',
  dark: '0 4px 10px rgba(0, 0, 0, 0.42)',
});

const themeModalInfoBackground = theme('mode', {
  light: 'linear-gradient(124.48deg, #f6faff 28.86%, #dfe9fd 110.11%)',
  dark: 'linear-gradient(117.98deg, #3a3d4e 46.98%, #1f1523 95.78%)',
});

const themeModalInfoBoxShadow = theme('mode', {
  light: '0 4px 16px #dde5f1',
  dark: '660px 4px 250px rgba(32, 23, 36, 0.7), 5px 10px 50px #2e303e',
});

const themeModalTitleColor = theme('mode', {
  light: '#5e647c',
  dark: '#ffffff',
});

const themeModalIconPathFill = theme('mode', {
  light: '#5e647c',
  dark: '#ffffff',
});

const themeModalFieldColor = theme('mode', {
  light: '#5e647c',
  dark: '#ffffff',
});

const themeModalFieldPlaceholderColor = theme('mode', {
  light: '#5e647c',
  dark: '#ffffff',
});

const themeModalFieldBackground = theme('mode', {
  light: 'linear-gradient(90.15deg, #ebf3fc 1.15%, #e2ecfd 100.11%)',
  dark: 'linear-gradient(140.4deg, #271827 3%, #2c2535 115.66%)',
});

const themeModalFieldBoxShadow = theme('mode', {
  light:
    '-4px -3px 16px rgba(255, 255, 255, 0.7), -1px 3px 65px rgba(182, 194, 215, 0.49), inset 10px 10px 10px rgba(224, 235, 248, 0.2), inset 5px 5px 10px rgba(167, 172, 190, 0.7)',
  dark: '-4px -4px 16px rgba(88, 76, 98, 0.25), 3px 3px 12px rgba(0, 0, 0, 0.2), inset 4px 4px 8px rgba(0, 0, 0, 0.35)',
});

export const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 4;
  width: 100%;
  height: 100%;
  background: ${themeOverlayBackground};
`;

export const StyledModal = styled.div<{ active?: boolean; type: string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 5;
  display: ${(props) => (props.active ? 'block' : 'none')};
  width: 860px;
  height: 616px;
  background: ${themeModalBackground};
  border-radius: 8px;
  box-shadow: ${themeModalBoxShadow};
  transform: translate(-50%, -50%);

  ${(props) =>
    props.type === 'add' &&
    css`
      .modal__icon-first {
        position: absolute;
        bottom: -40px;
        left: 25px;
        width: 185px;
        height: 233px;
      }

      .modal__icon-second {
        position: absolute;
        right: 23px;
        bottom: 6px;
        width: 352px;
        height: 329px;
      }
    `}

  ${(props) =>
    props.type === 'edit' &&
    css`
      .modal__icon-first {
        position: absolute;
        bottom: -20px;
        left: 25px;
        width: 209px;
        height: 337px;
      }

      .modal__icon-second {
        position: absolute;
        right: 25px;
        bottom: 8px;
        width: 286px;
        height: 269px;
      }
    `}

  ${(props) =>
    props.type === 'delete' &&
    css`
      .modal__icon-first {
        position: absolute;
        bottom: 5px;
        left: 17px;
        width: 370px;
        height: 243px;
      }

      .modal__icon-second {
        position: absolute;
        right: 24px;
        bottom: 7px;
        width: 300px;
        height: 261px;
      }
    `}
`;

export const StyledModalInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 68px;
  padding: 19px 25px 20px 25px;
  background: ${themeModalInfoBackground};
  border-radius: 8px 8px 0 0;
  box-shadow: ${themeModalInfoBoxShadow};
`;

export const StyledModalTitle = styled.h2`
  margin: 0;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  font-family: inherit;
  color: ${themeModalTitleColor};
`;

export const StyledModalLink = styled.a`
  display: block;
  width: 21px;
  height: 21px;
  margin-left: auto;
`;

export const StyledModalIcon = styled.div`
  width: 100%;
  height: 100%;

  path {
    fill: ${themeModalIconPathFill};
  }
`;

export const StyledModalForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  margin-top: 90px;
  padding: 0 25px;
`;

export const StyledModalLabel = styled.label`
  width: 725px;
  height: 60px;
`;

export const StyledModalInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 20px 30px 19px 30px;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  font-family: inherit;
  color: ${themeModalFieldColor};
  background: ${themeModalFieldBackground};
  border: none;
  border-radius: 10px;
  outline: none;
  box-shadow: ${themeModalFieldBoxShadow};

  &::placeholder {
    color: ${themeModalFieldPlaceholderColor};
  }
`;
