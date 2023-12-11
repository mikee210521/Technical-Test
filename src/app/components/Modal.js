import React from "react";
import ReactDOM from "react-dom";
import styles from '@/app/page.module.css'

export default function Modal({children}) {
    return ReactDOM.createPortal(
        <div className={styles.pack_content}>
            {children}
        </div>,
        document.getElementById('modal')
    );
};
