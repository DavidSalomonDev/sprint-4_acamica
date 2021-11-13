import firestore from "./firebase.config";
import { collection, getDocs, addDoc, where, query } from "firebase/firestore";

const usersCollection = collection(firestore, "users");

export const getUsers = async () => {
    const users = [];
    const usersSnapshot = await getDocs(usersCollection);
    usersSnapshot.forEach((user) => {
        users.push({ ...user.data(), id: user.id });
    });
    return users;
};

export const getusersByUser = async (userId) => {
    const users = [];

    const filteredusersCollection = query(
        usersCollection,
        where("usuario.id", "==", userId)
    );

    const filteredusersSnapshot = await getDocs(filteredusersCollection);
    filteredusersSnapshot.forEach((user) => {
        if (user.data().usuario.id === userId) {
            users.push({ ...user.data(), id: user.id });
        }
    });
    return users;
};

export const adduser = async (user) => {
    const newuser = await addDoc(usersCollection, user);
    return newuser;
};
