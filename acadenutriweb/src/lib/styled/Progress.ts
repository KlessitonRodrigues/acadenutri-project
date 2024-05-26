import styled, { css } from 'styled-components';

import { gradients } from 'src/styles/theme';
import { cssSize, screenSize } from 'src/styles/utils';

export const ProgressLine = styled.div<Props.CssProps>(
  ({ theme, w }) => css`
    width: 100%;
    background-color: ${theme.colors.bg4};
    border-radius: ${theme.radius.small};
    overflow: hidden;

    &::after {
      display: block;
      content: '';
      width: ${w ?? '0%'};
      padding: ${cssSize(1)};
      padding-top: ${cssSize(2.5)};
      background-color: ${theme.colors.main};
      background-image: ${gradients.green};
      color: ${theme.colors.mainText};
      border-radius: ${theme.radius.small};
      font-size: 12px;
      font-weight: bold;
      line-height: 0;
      text-align: center;
      letter-spacing: 1px;
    }
  `,
);

export const ProgressStepBox = styled.div<Props.CssProps>(
  () => css`
    width: 100%;
    display: flex;
    align-items: center;
    gap: ${cssSize(1)};
  `,
);

export const ProgressStep = styled.div<Props.CssProps>(
  ({ theme, half }) => css`
    padding: ${cssSize(1)} ${cssSize(half ? 3 : 6)};
    background-color: ${theme.colors.main};
    border-radius: ${theme.radius.large};
  `,
);

export const StepLineItem = styled.div<Props.CssProps>(
  ({ theme, active, half, reverse }) => css`
    width: ${cssSize(12)};
    height: ${cssSize(12)};
    min-width: ${cssSize(12)};
    min-height: ${cssSize(12)};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: ${theme.border.large};
    border-radius: 50%;
    font-weight: bold;
    margin-right: ${!reverse && cssSize(40)};
    color: ${theme.colors.text3};
    border-color: ${theme.colors.text3};
    background-color: ${theme.colors.bg1};
    ${active && `color: ${theme.colors.mainText};`}
    ${active && `background-image: ${gradients.greenReverse};`}
    ${active && `border-color: ${theme.colors.main};`}
    ${half && `color: ${theme.colors.text1};`}
    ${half && `border-color: ${theme.colors.main};`}

    &::after {
      content: '';
      display: ${reverse ? 'none' : 'block'};
      width: ${cssSize(43)};
      height: 2px;
      position: absolute;
      left: 100%;
      background-color: ${theme.colors.text4};
      ${active && `background-image: ${gradients.greenReverse};`}
    }

    @media (max-width: ${screenSize.laptopM}px) {
      margin-right: ${!reverse && cssSize(25)};

      &::after {
        width: ${cssSize(28)};
      }
    }

    @media (max-width: ${screenSize.tablet}px) {
      margin-right: ${!reverse && cssSize(5)};

      &::after {
        width: ${cssSize(8)};
      }
    }
  `,
);
