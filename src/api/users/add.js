import { collection, addDoc } from "firebase/firestore";
import db from "services/firebase.config";

const usersCollection = collection(db, "users");

export const addUser = async (user) => {
    const newuser = await addDoc(usersCollection, user);
    return newuser;
};