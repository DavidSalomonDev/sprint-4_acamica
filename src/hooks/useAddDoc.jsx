import { collection, addDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'

const useAddDoc = (db, collectionName, newPost = {
  content: '',
  date: new Date(),
  username: 'test',
  likes: 0,
}) => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const postData = (db, collectionName, newPost) => {
    setIsLoading(true)
    try {
      if (newPost.content.length < 1) return
      const postsCollection = collection(db, collectionName)
      addDoc(postsCollection, {
        content: newPost,
        date: new Date(),
        username: 'test',
        likes: 0,
      })
    } catch (error) {
      console.error('Error from collection:', error)
      setError(error.message)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    postData(db, collectionName, newPost)
  }, [db, collectionName, newPost])

  return [error, isLoading]
}

export default useAddDoc
