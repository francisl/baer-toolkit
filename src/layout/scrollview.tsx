import * as React from "react";
import { StyleSheet, css } from 'aphrodite';

var styles = StyleSheet.create({
    scrollViewCss: {
        width: '100%',
        height: '100%',
        overflow: 'auto'
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
