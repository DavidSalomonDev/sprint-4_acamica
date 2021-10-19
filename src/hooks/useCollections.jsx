import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import sortDate from '../utils/sortDate'

const useCollection = (db, collectionName) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const getData = async (db, collectionName) => {
    setIsLoading(true)
    try {
      const dataArray = []
      const collectionDocs = collection(db, collectionName)
      const documents = await getDocs(collectionDocs)
      documents.forEach((document) => {
        let date = new Date(document.data().date.toDate())
        dataArray.push({ ...document.data(), id: document.id, date })
      })
      const sortedArray = sortDate(dataArray)
      setData(sortedArray)
    } catch (error) {
      console.error('Error from collection', error)
      setError(error.message)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    getData(db, collectionName)
  }, [db, collectionName])

  return [data, error, isLoading]
}

export default useCollection
