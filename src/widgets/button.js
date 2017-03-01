import { theme, colors, themeColors } from '../theme/index';
import styled, { css } from 'styled-components'

const primary = css`
    background-color: ${themeColors.main};
    color: ${themeColors.mainInverse};
`
const warning = css`
    background-color: ${themeColors.warning.buttonBackground};
    border-color: ${themeColors.warning.borderColor};
    color: ${themeColors.default.color};
`;

const danger = css`
    background-color: ${themeColors.danger};
    border-color: ${themeColors.danger};
    color: ${themeColors.mainInverse};
`;

const disabled = css`
    border-color: ${themeColors.default.borderColor};
    color: ${themeColors.default.borderColor};
    background-color: ${colors.disabled};
    cursor: not-allowed;
`;

export default styled.button`
    border-color: ${themeColors.main};
    border-width: ${theme.borderWidth};
    border-style: ${theme.borderStyle};
    border-radius: ${theme.borderRadius};
    cursor: pointer;
    display: block;
    flex-shrink: 0;
    font-family: ${theme.font.default};
    font-size: ${theme.font.buttonSize};
    font-weight: bolder;
    font-style: normal;
    font-variant-caps: small-caps;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-weight: normal;

    height: ${theme.height};
    line-height: ${theme.lineHeight};
    letter-spacing: 0.1rem;
    margin: 0.5rem;
    outline: none;
    padding: 0rem 1rem;
    text-transform: uppercase;
    background-color: ${themeColors.mainInverse};
    color: ${themeColors.main};
    border-color: ${themeColors.main};
    ${ props => {
        if (props.primary) {
            return primary;
        } else if (props.warning) {
            return warning;
        } else if (props.danger) {
            return danger;
        } else if (props.disabled) {
            return disabled;
        }
    }}
`;
