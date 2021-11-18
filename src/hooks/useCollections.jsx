import { collection, onSnapshot } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import sortDate from 'utils/sortDate'

const useCollection = (db, collectionName) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

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

  return [data, isLoading, error]
}

export default useCollection
