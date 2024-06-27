import React from "react";
import ReactDOM from 'react-dom';
import './Modal1.css'
function Modal1({children}){ //eliminaste pros
    return ReactDOM.createPortal (
        <div className="ModalBackground1" >
            {children}
        </div>,
        document.getElementById('modal1')
    );
}

export { Modal1 };