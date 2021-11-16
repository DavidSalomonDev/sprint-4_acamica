import { addDoc } from 'firebase/firestore'
import { collection } from "firebase/firestore";
import db from 'services/firebase.config';

const postsCollection = collection(db, "posts");

export const addPost = async (post) => {
    const newPost = await addDoc(postsCollection, post);
    return newPost;
};