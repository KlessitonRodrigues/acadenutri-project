import styled, { css } from 'styled-components';

import profileImg from 'src/public/images/profile.jpg';
import { cssSize } from 'src/styles/utils';

export const Avatar = styled.div<Props.CssProps>(
  ({ theme, src }) => css`
    display: flex;
    max-width: ${cssSize(30)};
    max-height: ${cssSize(45)};
    padding: ${cssSize(6)};
    border-radius: ${theme.radius.medium};
    background-image: url(${profileImg.src || src});
    background-size: cover;
    border: ${theme.border.small};
    border-color: ${theme.colors.mainBg}88;
    border-radius: 50%;
  `,
);

export const AvatarBig = styled.image<Props.CssProps>(
  ({ theme, src }) => css`
    display: flex;
    width: 100%;
    height: 100%;
    max-width: ${cssSize(40)};
    max-height: ${cssSize(40)};
    padding: ${cssSize(25)};
    background-color: ${theme.colors.bg2};
    background-image: url(${profileImg.src || src});
    background-repeat: no-repeat;
    background-size: cover;
    border: ${theme.border.small};
    border-color: ${theme.colors.mainBg}88;
    border-radius: 50%;
  `,
);
