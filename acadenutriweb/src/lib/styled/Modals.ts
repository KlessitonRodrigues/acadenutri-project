import styled, { css } from 'styled-components';

import { animations, cssSize } from 'src/styles/utils';

export const Modal = styled.div<{ show: boolean }>(
  ({ show }) => css`
    display: ${show ? 'flex' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    animation: 0.5s ${animations.fadeIn} ease-out;
    background-color: #0006;
    padding: ${cssSize(8)};
  `,
);

export const ModalHeader = styled.div(
  () => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: ${cssSize(250)};
    padding: ${cssSize(4)};
    color: #fff;
  `,
);

export const ModalContent = styled.div<Props.CssProps>(
  ({ theme, maxw, h }) => css`
    width: 100%;
    height: ${h ?? cssSize(150)};
    max-width: ${maxw ?? cssSize(250)};
    padding: ${cssSize(6)};
    overflow: auto;
    border-radius: ${theme.radius.medium};
    animation: 0.5s ${animations.slideUp} ease-out;
    background-color: ${theme.colors.bg1};
  `,
);
