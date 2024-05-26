import styled, { css } from 'styled-components';

import { screenSize } from 'src/styles/utils';

export const ImageContainer = styled.div<Props.CssProps>(
  ({ w, h, x, y, size }) => css`
    transform: translateX(${x ?? '0'}) translateY(${y ?? '0'}) scale(${size ?? '1'});

    & img {
      ${w && `width: ${w};`};
      ${h && `height: ${h};`};
    }

    @media (max-width: ${screenSize.laptopS}px) {
      transform: translateX(0) translateY(0) scale(1);

      & img {
        ${w && `width: 100%;`};
        ${h && `height: 100%;`};
      }
    }
  `,
);
