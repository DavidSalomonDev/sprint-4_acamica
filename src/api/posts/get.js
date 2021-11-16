import db from "services/firebase.config";
import { collection, getDocs, where, query } from "firebase/firestore";
import sortDate from "utils/sortDate";

const posts = [];
const postsCollection = collection(db, "posts");

export const getPosts = async () => {

    const postsSnapshot = await getDocs(postsCollection);

    postsSnapshot.forEach((document) => {
        let post = document.data()
        let date = post.date ? post.date.toDate() : ''
        posts.push({ ...post, id: document.id, date })
    });
    const sortedArray = sortDate(posts)
    return sortedArray;
};

export const getPostsByUser = async (userId) => {
    const filteredpostsCollection = query(
        postsCollection,
        where("usuario.id", "==", userId)
    );

    const filteredpostsSnapshot = await getDocs(filteredpostsCollection);
    filteredpostsSnapshot.forEach((post) => {
        if (post.data().usuario.id === userId) {
            posts.push({ ...post.data(), id: post.id });
        }
    });
    return posts;
};