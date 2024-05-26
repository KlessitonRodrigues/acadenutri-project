import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/utils';

export const BigText = styled.span<Props.CssProps>(
  ({ size }) => css`
    font-size: ${cssSize(size || 5)};
    font-weight: bold;
  `,
);

export const TransparentText = styled.span<Props.CssProps>(
  ({ size }) => css`
    font-size: ${cssSize(size || 5)};
    opacity: 0.1;
    font-weight: 300;
  `,
);

export const OutlineText = styled.span<Props.CssProps>(
  ({ theme, size }) => css`
    font-size: ${cssSize(size || 5)};
    font-weight: bold;
    opacity: 0.2;
    color: ${theme.colors.white};
    -webkit-text-stroke: 1px ${theme.colors.mainBg};
  `,
);

export const BigBoldText = styled.span<Props.CssProps>(
  ({ theme, size }) => css`
    font-size: ${cssSize(size || 5)};
    font-weight: bold;
    opacity: 0.2;
    color: ${theme.colors.mainBg};
  `,
);
