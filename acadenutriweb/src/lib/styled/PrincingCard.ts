import styled, { css } from 'styled-components';

import { gradients } from 'src/styles/theme';
import { cssSize } from 'src/styles/utils';

export const Princing = styled.div<Props.CssProps>(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.gold {
      ${PricingHeaderBg},${PricingButton} {
        background-image: ${gradients.gold};
        color: ${theme.colors.white};
      }
    }

    &.silver {
      ${PricingHeaderBg},${PricingButton} {
        background-image: ${gradients.silver};
        color: ${theme.colors.white};
      }
    }

    &.bronze {
      ${PricingHeaderBg}, ${PricingButton} {
        background-image: ${gradients.bronze};
        color: ${theme.colors.white};
      }
    }
  `,
);

export const PricingHeaderBg = styled.div<Props.CssProps>(
  ({ theme }) => css`
    background-color: ${theme.colors.bg1};
    border-radius: ${theme.radius.small};
    overflow: hidden;
    z-index: 1;
    margin-bottom: ${cssSize(-25)};
  `,
);

export const PricingHeader = styled.div<Props.CssProps>(
  ({ theme, src }) => css`
    width: ${cssSize(80)};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${cssSize(2)};
    padding: ${cssSize(4)} ${cssSize(8)};
    border: ${theme.border.small};
    border-radius: ${theme.radius.small};
    background-image: url(${src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 2;
    font-size: ${theme.fontSize.small};
  `,
);

export const PricingBody = styled.div(
  ({ theme }) => css`
    width: ${cssSize(95)};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: ${cssSize(3)};
    padding: ${cssSize(30)} ${cssSize(4)} ${cssSize(4)};
    border-radius: ${theme.radius.medium};
    box-shadow: ${theme.shadow.medium};

    a {
      width: 100%;
    }
  `,
);

export const PricingItem = styled.div<Props.CssProps>(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: ${cssSize(2)};
    p {
      width: ${cssSize(90)};
      font-size: ${theme.fontSize.h6};
      color: ${theme.colors.text3};
    }
    & svg path {
      color: ${theme.colors.main};
      stroke-width: 48px;
    }
  `,
);

export const PricingButton = styled.button(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${cssSize(4)};
    padding: ${cssSize(4)};
    margin-top: ${cssSize(4)};
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
    font-size: ${theme.fontSize.body};
    font-weight: bold;

    &:hover {
      opacity: 0.7;
    }
  `,
);
