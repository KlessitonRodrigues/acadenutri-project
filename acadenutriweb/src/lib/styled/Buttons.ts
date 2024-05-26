import styled, { css } from 'styled-components';

import { gradients } from 'src/styles/theme';
import { cssSize } from 'src/styles/utils';

export const Button = styled.button<Props.CssProps>(
  ({ theme, w, h }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: ${cssSize(30)};
    background-color: ${theme.colors.bg1};
    color: ${theme.colors.text2};
    border-radius: ${theme.radius.medium};
    box-shadow: ${theme.shadow.small};
    font-size: ${theme.fontSize.body};
    padding: ${cssSize(3)} ${cssSize(6)};
    cursor: pointer;
    ${w && `width: ${w};`}
    ${h && `height: ${h};`}
    transition:  0.3s ease-out;
    text-decoration: none;

    &:hover {
      opacity: 0.7;
    }
  `,
);

export const MainBtn = styled(Button)(
  ({ theme }) => css`
    background-color: ${theme.colors.mainBg};
    color: ${theme.colors.mainText};
  `,
);

export const OutlineBtn = styled(Button)(
  ({ theme }) => css`
    color: ${theme.colors.mainBg};
    border: ${theme.border.small};
  `,
);

export const GradientBtn = styled(Button)(
  ({ theme }) => css`
    color: ${theme.colors.mainText};
    background-image: ${gradients.green};
  `,
);

export const SquareGradientBtn = styled(Button)(
  ({ theme, active }) => css`
    background-color: ${theme.colors.bg4};
    color: ${theme.colors.text1};
    border-radius: ${theme.radius.small};
    padding: ${cssSize(2.5)};
    ${active && `background-image: ${gradients.green};`}
    ${active && `color: ${theme.colors.mainText};`}
  `,
);

export const WhiteBtn = styled(Button)(
  ({ theme }) => css`
    background-color: ${theme.colors.bg1};
    color: ${theme.colors.main};
  `,
);
