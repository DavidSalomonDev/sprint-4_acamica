import { useState, useEffect } from 'react'

export const useFetch = (url, defaultResponse = { isLoading: true, data: null }) => {

  const [data, setData] = useState(defaultResponse)

  const handleData = async (url) => {
    try {
      let request = await fetch(url)
      let response = await request.json()
      let data = await response.data
      setData({
        isLoading: false,
        data,
      })
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    handleData(url)
  }, [url])

  return data
}
