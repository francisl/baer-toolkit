import styled, { css } from 'styled-components'
import { theme, themeColors } from '../theme/index';

const verticalCss = css`
    align-items: ${ function(props) {
        console.log('called ........... props : ', props);
        if (props.center) {
            return 'center';
        } else if (props.right) {
            return 'flex-end';
        } else if (props.stretch) {
            return 'stretch';
        } else {
            return 'flex-start';
        }
    }};
`;

const horizontalCss = css`
    align-items: center;
    ${''/* width: 100%; */}
`;

export default styled.div`
    background-color: ${themeColors.backgroundContrast};
    border-color: ${themeColors.default};
    border-width: ${theme.borderWidth};
    border-style: ${theme.borderStyle};
    border-radius': ${theme.borderRadius};
    justify-content: ${ function(props) {
        if (props.center) {
            return 'center';
        } else if (props.right) {
            return 'flex-end';
        } else {
            return 'flex-start';
        }
    }};
    overflow: hidden;
    margin: 5px;
    ${ function(props) {
        if (props.vertical) {
            return verticalCss;
        } else {
            return horizontalCss;
        }
    }};
`;
