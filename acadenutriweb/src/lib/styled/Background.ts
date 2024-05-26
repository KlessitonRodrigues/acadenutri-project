import styled, { css } from 'styled-components';

import bgImage1 from 'src/public/images/bg1.svg';
import ellipseBg3 from 'src/public/images/ellipseBg3.png';
import peoplesBg from 'src/public/images/peopleBG.png';
import { gradients } from 'src/styles/theme';
import { cssSize, screenSize } from 'src/styles/utils';

export const ElipseBg1 = styled.div(
  () => css`
    background-image: url(${bgImage1.src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `,
);

export const ElipseBg3 = styled.div(
  () => css`
    background-image: url(${ellipseBg3.src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `,
);

export const PeopleBg = styled.div(
  () => css`
    background-image: url(${peoplesBg.src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding-bottom: ${cssSize(70)};
  `,
);

export const BackgroundImage = styled.div<Props.CssProps>(
  ({ src, p }) => css`
    background-image: url(${src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: ${p};

    @media (max-width: ${screenSize.laptopS}px) {
      background-size: cover;
    }
  `,
);

export const GradientBg = styled.div(
  ({ theme }) => css`
    background-image: ${gradients.green};
    color: ${theme.colors.mainText};
  `,
);

export const DarkGreenBg = styled.div(
  ({ theme }) => css`
    background-image: ${gradients.darkGreen};
    color: ${theme.colors.mainText};
  `,
);

export const GrayBg = styled.div(
  ({ theme }) => css`
    background-color: ${theme.colors.bg3};
    color: ${theme.colors.text1};
  `,
);

export const ThemeBg3 = styled.div(
  ({ theme }) => css`
    background-color: ${theme.colors.bg3};
    color: ${theme.colors.text1};
  `,
);
