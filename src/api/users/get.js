import { collection, getDocs, where, query } from "firebase/firestore";
import db from "services/firebase.config";

const users = [];
const usersCollection = collection(db, "users");

export const getUsers = async () => {
    const usersSnapshot = await getDocs(usersCollection);
    usersSnapshot.forEach((user) => {
        users.push({ ...user.data(), id: user.id });
    });
    return users;
};

export const getUsersById = async (userId) => {
    const filteredUsersCollection = query(
        usersCollection,
        where("user.uid", "==", userId)
    );

    const filteredUsersSnapshot = await getDocs(filteredUsersCollection);
    filteredUsersSnapshot.forEach((user) => {
        if (user.data().usuario.id === userId) {
            users.push({ ...user.data(), id: user.id });
        }
    });
    return users;
};


