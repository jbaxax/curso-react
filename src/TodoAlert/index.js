import React from "react"
import { TodoContext } from "../TodoContext";
import './TodoAlert.css'

function TodoAlert(){
    const {
        closeTheModal1,
    } = React.useContext(TodoContext)
    return (
        <div className="TodoAlert">
            <p>No se puede repetir las tareas</p>
            <div className="button-container">
            <button onClick={closeTheModal1}>ACEPTAR</button>
            </div>
            
        </div>
    )
}
export {TodoAlert}