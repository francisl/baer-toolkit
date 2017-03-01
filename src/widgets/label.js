import { theme, colors, themeColors } from '../theme/index';
import styled, { css } from 'styled-components'

export default styled.label`
    color: ${colors.font};
    display: block;
    flex-shrink: 0;
    font-family: ${theme.font.default};
    font-size: ${theme.font.buttonSize};
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-weight: normal;

    height: ${theme.height};
    line-height: ${theme.lineHeight};
    letter-spacing: 0.1rem;
    margin: 0.5rem;
    outline: none;
    padding: 0rem;
`;
