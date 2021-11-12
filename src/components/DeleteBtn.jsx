import { deleteDoc, doc } from '@firebase/firestore'
import Swal from 'sweetalert2'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import db from 'services/firebase'


const DeleteBtn = ({ id }) => {

    const handleDelete = post => {
        Swal.fire({
            title: 'Delete this post?',
            text: "You won't be able to recover your post!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const postRef = doc(db, 'posts', post)
                deleteDoc(postRef, id)
                Swal.fire(
                    'Deleted!',
                    'Your post has been deleted.',
                    'success'
                )
            }
        })

    }

    return (
        <button onClick={() => handleDelete(id)} className='DeleteBtn'>
            <DeleteOutlineIcon />
        </button>
    )
}

export default DeleteBtn
