import { collection, onSnapshot } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import sortDate from 'utils/sortDate'

const useCollection = (db, collectionName) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    try {
      setIsLoading(true)
      const collectionDocs = collection(db, collectionName)

      const unsub = onSnapshot(collectionDocs, snapshot => {
        const dataArray = []
        snapshot.forEach((document) => {
          let date = document.data().date ? new Date(document.data().date.toDate()) : ''
          dataArray.push({ ...document.data(), id: document.id, date })
        })
        const sortedArray = sortDate(dataArray)
        setData(sortedArray)
      }, error => {
        setError(error.message)
      })
      setIsLoading(false)
      return () => {
        unsub()
      }
    } catch (e) {
      console.log(e)
    }

  }, [db, collectionName])

  return [data, error, isLoading]
}

export default useCollection
