import { addDoc, collection } from "firebase/firestore";
import { getUsers } from "api/users/get";
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	signOut,
} from "firebase/auth";
import db from "./firebase.config";

const auth = getAuth();

export const googleAuth = async () => {
	const provider = new GoogleAuthProvider();
	const authResult = await signInWithPopup(auth, provider);

	// The signed-in user info.
	const userCredentials = authResult.user;

	// Actions with the user
	if (!userCredentials) return;

	// Check auth user if they already exist in collection
	const usersData = [...getUsers()];
	const doesExist = usersData.find(({ uid }) => uid === userCredentials.uid);
	if (doesExist) {
		return doesExist;
	} else {
		const newUser = {
			displayName: userCredentials.displayName,
			email: userCredentials.email,
			photoURL: userCredentials.photoURL,
			uid: userCredentials.uid,
			username: "",
			color: "",
		};
		const usersCollection = collection(db, "users");
		addDoc(usersCollection, newUser);
		return newUser;
	}
};

export const Logout = async () => {
	await signOut(auth);
};
