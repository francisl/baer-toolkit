import * as React from "react";
import { StyleSheet, css } from 'aphrodite';
import { theme, themeColors } from '../theme/index';

const styles = StyleSheet.create({
    inputCss: {
        alignItems: 'center',
        borderColor: themeColors.main,
        borderWidth: theme.borderWidth,
        borderStyle: theme.borderStyle,
        'border-radius': theme.borderRadius,
        cursor: 'pointer',
        display: 'inline-flex',
        fontFamily: 'Arial',
        fontWeight: 600,
        fontSize: 12,
        lineHeight: '1.8rem',
        letterSpacing: '0.1rem',
        margin: '0.5rem',
        outline: 'none',
        padding: '0rem 1rem'
    },
    default: {
        'background-color': themeColors.mainInverse,
        color: themeColors.main,
        borderColor: themeColors.main,
    },
    primary: {
        backgroundColor: themeColors.main,
        color: themeColors.mainInverse
    },
    warning: {
        backgroundColor: themeColors.warning,
        borderColor: themeColors.warning,
        color: themeColors.main
    },
    error: {
        backgroundColor: themeColors.danger,
        borderColor: themeColors.danger,
        color: themeColors.mainInverse
    }
});

interface inputProps {
    style?: string,
    type?: string
}


function getInputTypeCss(style: string) {
    switch(style){
        case 'primary':
            return styles.primary;
        case 'warning':
            return styles.warning;
        case 'error':
            return styles.error;
        default:
            return styles.default;
    }
}

export default (props: inputProps) => {
    const {style, ...otherProps} = props;
    return (<input
        className={css(styles.inputCss, getInputTypeCss(style))}
        {...otherProps} />);
};