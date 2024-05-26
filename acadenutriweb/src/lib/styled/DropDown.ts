import styled, { css } from 'styled-components';

import { animations, cssSize } from 'src/styles/utils';

export const Dropdown = styled.div<Props.CssProps>(
  ({ theme, active }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    background-color: ${theme.colors.main}11;
    gap: ${cssSize(2)};
    padding: ${cssSize(2.5)};
    border-radius: ${theme.radius.large};
    cursor: pointer;
    text-transform: capitalize;

    ${DropdownItems} {
      display: ${active ? 'flex' : 'none'};
    }
  `,
);

export const DropdownWhite = styled(Dropdown)(
  ({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.bg1};
    color: ${theme.colors.text3};
    border: ${theme.border.small};
    border-radius: ${theme.radius.medium};
    padding: ${cssSize(4)} ${cssSize(4)};
    min-height: ${cssSize(14.2)};
  `,
);

export const DropdownItems = styled.div<Props.CssProps>(
  ({ theme, w, y, x }) => css`
    width: ${w ?? '100%'};
    position: absolute;
    top: ${y ?? '120%'};
    left: ${x ?? 0};
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: ${cssSize(4)};
    padding: ${cssSize(4)};
    background-color: ${theme.colors.bg1};
    box-shadow: ${theme.shadow.medium};
    border-radius: ${theme.radius.small};
    font-size: ${theme.fontSize.label};
    animation: ${animations.fadeUp} 0.2s linear;
    user-select: none;
    max-height: ${cssSize(60)};
    overflow-y: auto;
    font-weight: bold;
  `,
);

export const DropdownItem = styled.div(
  () => css`
    display: flex;
    align-items: center;
    gap: ${cssSize(2)};
    min-width: ${cssSize(45)};
    word-wrap: none;
    word-break: keep-all;
    white-space: nowrap;

    &:hover {
      opacity: 0.6;
    }
  `,
);
