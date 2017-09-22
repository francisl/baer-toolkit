import styled, { css } from 'styled-components'

const verticalCss = css`
    align-items: ${ function(props) {
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
    display: inline-flex;
    flex-direction: column;
`;

const horizontalCss = css`
    align-items: center;
    display: inline-flex;

`;

export default styled.div`
    justify-content: ${ function(props) {
        if (props.center) {
            return 'center';
        } else if (props.right) {
            return 'flex-end';
        } else {
            return 'flex-start';
        }
    }};
    display: inline-block;
    overflow: hidden;
    margin: 5px;
    ${ function(props) {
        if (props.vertical) {
            return verticalCss;
        } else {
            return horizontalCss;
        }
    }};
    width: 100%;
`;
