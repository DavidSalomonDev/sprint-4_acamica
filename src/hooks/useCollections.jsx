import { useState,useEffect } from "react";

const useCollections = (collectionPath, db) => {
	const [isLoading, setIsLoading] = useState(false)
	const [isError, setIsError] = useState(false)
	const [data, setData] = useState({})

	useEffect(()=>{
		(async () => {
			setIsLoading(true)

			const getCollections = await db.collection(collectionPath)
			.orderBy('id')
			.onSnapshot( (snapshot) => {
				if(snapshot.size){
					let data = []
					snapshot.forEach((doc) => {
						data.push({...doc.data(), uid: doc.id})
					})
					setData(data)
					setIsLoading(false)
				}else{
					setIsLoading(false)
				}
			},
			(error) => setIsError(error.message))

			return () =>{
				getCollections()
			}
		})()
	}, [collectionPath, db])

	return {isLoading, isError, data}
}

export default useCollections