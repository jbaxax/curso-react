import {TodoIcon} from './index.js'
function DeleteIcon({onDelete}){
    return  (<TodoIcon
    type='delete'
    color= 'gray'
    /* onClick={onDelete} */
    onClick = {
       onDelete
    }
    
    
/>
    )
}

export {DeleteIcon}