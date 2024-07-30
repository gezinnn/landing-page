// HoverUnderLine.js
import React from 'react';
import styles from './HoverUnderLine.module.css'; // Verifique se o arquivo de estilos está sendo importado corretamente

const HoverUnderLine = ({ children }) => {
    return (
        <span className={styles.hoverUnderLine}>
            {children}
        </span>
    );
}

export default HoverUnderLine;
