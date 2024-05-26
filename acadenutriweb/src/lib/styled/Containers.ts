import styled, { css } from 'styled-components';

import { cssSize, screenSize } from 'src/styles/utils';

export const Page = styled.div(
  () => css`
    width: 100%;
    height: 100%;
  `,
);

export const PageContainer = styled.div(
  () => css`
    width: 100%;
    height: 100%;
  `,
);

export const PageContent = styled.div(
  () => css`
    width: 100%;
    height: 100%;
    margin: auto;
    margin-bottom: ${cssSize(10)};
    max-width: ${screenSize.desktopS}px;
  `,
);

export const Container = styled.div(
  () => css`
    width: 100%;
    padding: ${cssSize(8)};
  `,
);

export const Section = styled.section<Props.CssProps>(
  ({ p, m }) => css`
    width: 100%;
    padding: ${cssSize(32)} ${cssSize(16)};
    ${p && `padding: ${p};`}
    ${m && `margin: ${m};`}

    @media (max-width: ${screenSize.laptopS}px) {
      padding: ${cssSize(16)} ${cssSize(8)};
      ${p && `padding: ${p};`}
    }
  `,
);

export const MainOutilineBox = styled.div<Props.CssProps>(
  ({ theme, w, h }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${cssSize(8)};
    border: ${theme.border.medium};
    border-color: ${theme.colors.mainText};
    border-radius: ${theme.radius.small};
    ${w && `width: ${w};`}
    ${h && `height: ${h};`}
  `,
);

export const GreenBox = styled.div(
  ({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: ${cssSize(4)};
    background-color: ${theme.colors.main}22;
    border-radius: ${theme.radius.large};
  `,
);

export const LightGreenBox = styled.div<Props.CssProps>(
  ({ theme, w }) => css`
    display: flex;
    justify-content: start;
    align-items: center;
    width: ${w || '100%'};
    padding: ${cssSize(4)} ${cssSize(6)};
    gap: ${cssSize(4)};
    background-color: ${theme.colors.main};
    color: ${theme.colors.mainText};
    border-radius: ${cssSize(20)};

    @media (max-width: ${screenSize.laptopS}px) {
      width: 100%;
    }
  `,
);

export const WhiteBox = styled.div<Props.CssProps>(
  ({ theme, w, h }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: ${cssSize(4)};
    background-color: ${theme.colors.white};
    border-radius: ${theme.radius.small};
    box-shadow: ${theme.shadow.small};
    ${w && `width: ${w};`}
    ${h && `height: ${h};`}
  `,
);

export const Card = styled.div<Props.CssProps>(
  ({ theme, w }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${cssSize(5)};
    width: ${w ?? '100%'};
    border: ${theme.border.small};
    border-radius: ${theme.radius.large};
    padding: ${cssSize(4)};
    transition: border 0.3s;
    cursor: pointer;

    &:hover {
      border: ${theme.border.medium};
    }

    @media (max-width: ${screenSize.laptopS}px) {
      width: 100%;
      flex-direction: row;
      align-items: center;
      justify-content: left;
    }
  `,
);
