import React from 'react';
import styles from './HoverUnderLine.module.css'; 

const HoverUnderLine = ({ children }) => {
    return (
        <span className={styles.hoverUnderLine}>
            {children}
        </span>
    );
}

export default HoverUnderLine;
