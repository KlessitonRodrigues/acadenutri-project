import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/utils';

export const Label = styled.label<Props.CssProps>(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${cssSize(2)};

    span {
      font-weight: bold;
      font-size: ${theme.fontSize.label};
    }
  `,
);

export const InputBox = styled.label<Props.CssProps>(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: ${theme.colors.bg1};
    border-radius: ${theme.radius.medium};
    padding: ${cssSize(4)} ${cssSize(3)};
    border: ${theme.border.small};

    svg {
      transform: scale(1.3);
      cursor: pointer;
    }
  `,
);

export const Input = styled.input<Props.CssProps>(
  ({ theme }) => css`
    width: 100%;
    background-color: transparent;
    border: none;
    font-size: ${theme.fontSize.body};
    padding: 0 ${cssSize(2)};
  `,
);

export const DigitInput = styled.input<Props.CssProps>(
  ({ theme }) => css`
    width: ${cssSize(15)};
    height: ${cssSize(15)};
    border-radius: ${theme.radius.small};
    background-color: ${theme.colors.bg1};
    border: ${theme.border.large};
    border-color: ${theme.colors.main};
    font-size: ${theme.fontSize.body};
    padding: 0 ${cssSize(2)};
    text-align: center;
  `,
);

export const CheckBoxContainer = styled.div<Props.CssProps>(
  ({ theme, active }) => css`
    display: flex;
    align-items: center;
    gap: ${cssSize(2)};
    color: ${theme.colors.text4};
    font-size: ${theme.fontSize.body};
    cursor: pointer;
    ${active && `color: ${theme.colors.text2};`}

    &:hover {
      opacity: 0.7;
    }
  `,
);

export const CheckBoxMark = styled.div<Props.CssProps>(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${cssSize(6)};
    height: ${cssSize(6)};
    border-radius: 5px;
    border: ${theme.border.small};
    color: ${theme.colors.mainBg};
  `,
);

export const Switch = styled.div<Props.CssProps>(
  ({ theme, active }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${cssSize(14)};
    padding: ${cssSize(3.5)} 0;
    border-radius: ${theme.radius.large};
    background-color: ${theme.colors.bg2};
    border: ${theme.border.small};
    position: relative;
    cursor: pointer;
    transition: background-color 0.3s linear;
    ${active && `background-color: ${theme.colors.main};`}

    &:hover {
      opacity: 0.7;
    }

    &::after {
      content: '';
      display: inline-block;
      width: ${cssSize(6)};
      height: ${cssSize(6)};
      border-radius: 50%;
      background-color: ${theme.colors.bg1};
      border: ${theme.border.small};
      position: absolute;
      top: 0.05rem;
      ${active ? 'right: 0;' : 'left: 0;'}
    }
  `,
);

export const TextArea = styled.textarea<Props.CssProps>(
  ({ theme }) => css`
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    height: ${cssSize(80)};
    min-height: ${cssSize(20)};
    padding: ${cssSize(4)};
    border: ${theme.border.small};
    border-radius: ${theme.radius.medium};
    background-color: ${theme.colors.bg1};
    color: ${theme.colors.mainBg};
    font-size: ${theme.fontSize.body};
  `,
);

export const CheckboxInput = styled(Input)(
  ({ theme }) => css`
    width: 0;
    margin-right: ${cssSize(8)};
    margin-bottom: ${cssSize(2)};

    &::after {
      content: '';
      display: inline-block;
      width: ${cssSize(5)};
      height: ${cssSize(5)};
      border-radius: 5px;
      background-color: ${theme.colors.bg1};
      border: ${theme.border.small};
    }

    &:checked {
      &::after {
        background-color: ${theme.colors.main};
      }
    }
  `,
);
