import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/utils';

export const Hr = styled.hr<Props.CssProps>(
  ({ theme }) => css`
    width: 100%;
    border-bottom: ${theme.border.small};
    margin-bottom: ${cssSize(2)};
  `,
);

export const Vr = styled.div<Props.CssProps>(
  ({ theme }) => css`
    padding: ${cssSize(5)} ${cssSize(0.5)};
    background-color: ${theme.colors.main};
    opacity: 0.2;
  `,
);
