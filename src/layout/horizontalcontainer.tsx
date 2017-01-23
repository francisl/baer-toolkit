import * as React from "react";
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
    HorizontalContainerCss: {
        alignItems: 'center',
        display: 'inline-flex',
        justifyContent: 'flex-start',
        overflow: 'hidden',
        margin: '5px',
        width: '100%'
    }
});

const HorizontalContainer = (props: {children?: String, style?: any, className?: string}) => {
    const { children, ...otherProps } = props;
    return (
        <div className={css(styles.HorizontalContainerCss)} {...otherProps}>
            {children}
        </div>
    );
};

export default HorizontalContainer;
