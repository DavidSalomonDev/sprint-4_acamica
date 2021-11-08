import { useState } from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'

const LikeBtn = () => {

  const [like, setLike] = useState(false)

  const handleLike = () => {
    setLike(!like)
  }
  return (
    <button className = 'LikeBtn' onClick = {handleLike}>
      {like ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </button>
  )
}

export default LikeBtn
