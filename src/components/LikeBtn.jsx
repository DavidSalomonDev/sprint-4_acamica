import { useContext, useState } from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { updateDoc, doc, arrayUnion, arrayRemove } from '@firebase/firestore'
import db from 'services/firebase'
import { UserContext } from 'context/User'

const LikeBtn = ({ id, isLiked }) => {

  const { user } = useContext(UserContext)
  const [like, setLike] = useState(isLiked)


  const handleLike = (post) => {
    const postRef = doc(db, 'posts', post)
    if (!like) {
      updateDoc(postRef, {
        likes: arrayUnion(user.uid)
      })
      setLike(true)

    } else {
      updateDoc(postRef, {
        likes: arrayRemove(user.uid)
      })
      setLike(false)
    }

  }


  return (
    <button className='LikeBtn' onClick={() => { handleLike(id) }}>
      {like ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </button>
  )
}

export default LikeBtn
