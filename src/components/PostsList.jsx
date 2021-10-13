import { db } from "../services/firebase"
import { collection, getDocs } from "firebase/firestore/lite"
import { useEffect, useState } from "react"

const PostsList = () =>{
	const [getPosts, setGetPosts] = useState([])

	const fetchData = async () => {
		const postsArray = []
		const postsCollection = collection(db, 'posts')
		getDocs(postsCollection).then(posts => {
			posts.forEach(post => {
				postsArray.push({...post.data(), id: post.id})
			})
		setGetPosts(postsArray)
		})
	}

	useEffect(()=>{
		fetchData()
	}, [])

	const postsDB = getPosts.map((post, idx) => <div key={ idx}>{post.content}</div>)

	return(
		<div>
			{postsDB}
		</div>
	)
}

export default PostsList