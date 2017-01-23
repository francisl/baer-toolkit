import * as React from "react";
import { StyleSheet, css } from 'aphrodite';
import { theme, themeColors } from '../theme/index';

const styles = StyleSheet.create({
    ButtonCss: {
        borderColor: themeColors.main,
        borderWidth: theme.borderWidth,
        borderStyle: theme.borderStyle,
        borderRadius: theme.borderRadius,
        cursor: 'pointer',
        flexShrink: 0,
        fontFamily: 'Arial',
        fontWeight: 600,
        fontSize: 12,
        height: '2rem',
        lineHeight: '1.8rem',
        letterSpacing: '0.1rem',
        margin: '0.5rem',
        outline: 'none',
        padding: '0rem 1rem',
        textTransform: 'uppercase'
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
    danger: {
        backgroundColor: themeColors.danger,
        borderColor: themeColors.danger,
        color: themeColors.mainInverse
    }
});

export interface buttonProps {
    style?: string,
    type?: string,
    children?: string,
    onClick: any
}


function getButtonTypeCss(style: string) {
    switch(style){
        case 'primary':
            return styles.primary;
        case 'warning':
            return styles.warning;
        case 'danger':
            return styles.danger;
        default:
            return styles.default;
    }
}

export default (props: buttonProps) => (
  <button
    className={css(styles.ButtonCss, getButtonTypeCss(props.style))}
    onClick={props.onClick}
    {...props.type}>
      {props.children}
  </button>
);