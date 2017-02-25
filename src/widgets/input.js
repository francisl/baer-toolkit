import { theme, themeColors } from '../theme/index';
import styled, { css } from 'styled-components'

const defaultCss = css`
    background-color: ${themeColors.mainInverse};
    color: ${themeColors.main};
    border-color: ${themeColors.main};
`;

const primary = css`
    background-color: ${themeColors.main};
    color: ${themeColors.mainInverse};
`;

const warning = css`
    background-color: ${themeColors.warning};
    border-color: ${themeColors.warning};
    color: ${themeColors.main};
`;

const danger = css`
    background-color: ${themeColors.danger};
    border-color: ${themeColors.danger};
    color: ${themeColors.mainInverse};
`;

export default styled.input`
    align-items: 'center';
    border-color: ${themeColors.main};
    border-width: ${theme.borderWidth};
    border-style: ${theme.borderStyle};
    border-radius': ${theme.borderRadius};
    cursor: pointer;
    display: inline-flex;
    font-family: 'Arial';
    font-weight: 600;
    font-size: 12;
    line-height: 1.8rem;
    letter-spacing: 0.1rem;
    margin: 0.5rem;
    outline: none;
    padding: 0rem 1rem;
    ${ props => {
        if (props.primary) {
            return primary;
        } else if (props.warning) {
            return warning;
        } else if (props.error) {
            return danger;
        } else {
            return defaultCss;
        }
    }}
`;
