import * as React from "react";
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    scrollViewCss: {
        height: '100%',
        overflow: 'auto',
        padding: '5px',
        width: '100%'
    }
    
});

const ScrollView = (props: {children: String}) => {
    const { children, ...otherProps } = props;
    return (
        <div className={css(styles.scrollViewCss)} {...otherProps}>
            {children}
        </div>
    );
};

export default ScrollView;
