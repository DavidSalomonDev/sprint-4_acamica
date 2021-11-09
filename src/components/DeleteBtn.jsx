import { deleteDoc, doc } from '@firebase/firestore'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import db from 'services/firebase'

const DeleteBtn = ({ id }) => {

    const handleDelete = post => {
        const postRef = doc(db, 'posts', post)
        deleteDoc(postRef, id)
    }

    return (
        <button onClick={() => handleDelete(id)} className='DeleteBtn'>
            <DeleteOutlineIcon />
        </button>
    )
}

export default DeleteBtn
