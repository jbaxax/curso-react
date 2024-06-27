import {CompleteIcon} from '../TodoIcon/CompleteIcon.js'
import {DeleteIcon} from '../TodoIcon/DeleteIcon.js'
import './TodoItem.css';

function TodoItem(props) {

    const handleDeleteClick = () => {
        props.setOpenModal(true); // Abre el modal de confirmación en AppUI
    };

    return (
        <ul>
            <li className='TodoItem'>
                
                
                {/*  <span className={`Icon Icon-check 
                    ${props.completed && "Icon-check--active"}`} onClick={props.onComplete}>
                        V 
                </span> */}
                <CompleteIcon completed={props.completed}  onComplete={props.onComplete}/>
                <div>
                    <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
                    <p className={`TodoNote-p ${props.completed && "TodoItem-p--complete"}`}>{props.note}</p>
                </div>

                {/* <span className={`Icon Icon-delete`} onClick={props.onDelete}>X</span> */}
                <DeleteIcon  onDelete={handleDeleteClick} /* onDelete={props.onDelete} */ /* setOpenModal = {props.setOpenModal} */  /> {/* agrege setopen modal */}
            </li>
        </ul>

    )
}

export { TodoItem }