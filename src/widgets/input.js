import { theme, themeColors } from '../theme/index';
import styled, { css } from 'styled-components'

const defaultCss = css`
    background-color: ${themeColors.mainInverse};
    color: ${themeColors.main};
    border-color: ${themeColors.default};
    &:focus {
        border-color: ${themeColors.main};
    }
`;

const warning = css`
    background-color: ${themeColors.mainInverse};
    border-color: ${themeColors.warning};
    color: ${themeColors.warning};
`;

const danger = css`
    background-color: ${themeColors.mainInverse};
    border-color: ${themeColors.danger};
    color: ${themeColors.danger};
`;

const disabled = css`
    background-color: ${themeColors.backgroundContrast};
    border-color: ${themeColors.default};
`;

export default styled.input`
    align-items: "center";
    border-width: ${theme.borderWidth};
    border-style: ${theme.borderStyle};
    border-radius': ${theme.borderRadius};
    cursor: pointer;
    display: inline-flex;
    font-family: "Arial";
    font-weight: normal;
    font-size: 1.1rem;
    line-height: 1.8rem;
    letter-spacing: 0.1rem;
    margin: 0.5rem;
    outline: none;
    padding: 0rem 1rem;
    ${ props => {
        if (props.warning) {
            return warning;
        } else if (props.error) {
            return danger;
        } else if (props.disabled) {
            return disabled;
        } else {
            return defaultCss;
        }
    }}
`;
