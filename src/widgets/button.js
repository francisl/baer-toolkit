import { theme, themeColors } from '../theme/index';
import styled, { css } from 'styled-components'

const primary = css`
    background-color: ${themeColors.main};
    color: ${themeColors.mainInverse};
`
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

export default styled.button`
    border-color: ${themeColors.main};
    border-width: ${theme.borderWidth};
    border-style: ${theme.borderStyle};
    border-radius: ${theme.borderRadius};
    cursor: pointer;
    display: block;
    flex-shrink: 0;
    font-family: "Arial";
    font-weight: bold;
    height: 2rem;
    line-height: 1.8rem;
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
        }
    }}
`;
