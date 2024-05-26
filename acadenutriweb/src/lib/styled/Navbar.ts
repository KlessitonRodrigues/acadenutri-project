import styled, { css } from 'styled-components';

import { gradients } from 'src/styles/theme';
import { animations, cssSize, screenSize } from 'src/styles/utils';

export const Navbar = styled.nav(
  () => css`
    width: 100%;
    padding: ${cssSize(4)} ${cssSize(8)};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: ${cssSize(8)};
    position: relative;

    @media (max-width: ${screenSize.laptopL}px) {
      flex-direction: column;
    }
  `,
);

export const NavbarToggle = styled.div<Props.CssProps>(
  ({ active }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: ${cssSize(8)};

    @media (max-width: ${screenSize.laptopS}px) {
      flex-direction: column-reverse;
      justify-content: flex-end;
      height: ${active ? cssSize(175) : 0};
      overflow: hidden;
    }
  `,
);

export const NavbarLink = styled.div<Props.CssProps>(
  ({ theme, active }) => css`
    width: max-content;
    color: ${theme.colors.main};
    ${active && `color: ${theme.colors.mainBg};`}
    position: relative;

    &::after {
      content: '';
      width: ${active ? '100%' : '0%'};
      position: absolute;
      left: 0;
      bottom: ${cssSize(-1)};
      height: ${cssSize(1)};
      background-color: ${theme.colors.mainBg};
      transition: 0.3s ease-out;
    }

    &:hover::after {
      width: 100%;
    }
  `,
);

export const NavbarButton = styled.div<Props.CssProps>(
  ({ theme }) => css`
    display: none;
    position: absolute;
    top: ${cssSize(6)};
    left: ${cssSize(4)};
    width: ${cssSize(16)};
    height: ${cssSize(15)};
    background-image: ${gradients.green};
    color: ${theme.colors.mainText};
    border-radius: ${theme.radius.small};

    & svg {
      animation: ${animations.halfSpinning} 0.5s ease-out;
    }

    @media (max-width: ${screenSize.laptopS}px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `,
);
