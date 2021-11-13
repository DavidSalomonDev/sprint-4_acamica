import db from "./services/firebase.config";
import { collection, getDocs, where, query } from "firebase/firestore";

const postsCollection = collection(db, "posts");

export const getposts = async () => {
    const posts = [];
    const postsSnapshot = await getDocs(postsCollection);
    postsSnapshot.forEach((post) => {
        posts.push({ ...post.data(), id: post.id });
    });
    return posts;
};

export const getpostsByUser = async (userId) => {
    const posts = [];
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