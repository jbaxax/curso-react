import React from "react";
import './TodoDiv.css'
import { TodoContext } from "../TodoContext";

function TodoDiv({onDelete}) {
    
    const {
        onCancel,
    } = React.useContext(TodoContext)
    
    
    return (

        <div className="TodoDiv">
            <p>¿Eliminar este TODO?</p>
            <div className="TodoDiv-buttonContainer">
                <button  className="TodoDiv-button TodoDiv-button--cancel" onClick={onCancel}>CANCELAR</button>
                <button className="TodoDiv-button TodoDiv-button--add"  onClick={onDelete}>ELIMINAR</button>
            </div>

        </div>
    )
}

export { TodoDiv }

