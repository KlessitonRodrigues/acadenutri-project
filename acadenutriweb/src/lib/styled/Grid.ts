import styled, { css } from 'styled-components';

import { cssSize, screenSize } from 'src/styles/utils';

export const Grid = styled.div<Props.CssProps>(
  ({ gap, rows, cols, w, h }) => css`
    width: 100%;
    display: grid;
    gap: ${cssSize(gap ?? 4)};
    grid-template-columns: repeat(${cols}, 1fr);
    grid-template-rows: repeat(${rows}, 1fr);
    ${w && `width: ${w};`}
    ${h && `height: ${h};`}
  
    @media (max-width: ${screenSize.laptopM}px) {
      grid-template-columns: 1fr;
    }
  `,
);
