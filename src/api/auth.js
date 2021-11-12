import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";

const auth = getAuth();

export const getCurrentUser = () => {
    if (auth.currentUser) {
        const user = auth.currentUser;
        return {
            id: user.uid,
            displayName: user.displayName,
            email: user.email
        };
    }
    return false;
};

export const SignInWithGoogle = async () => {
    if (auth.currentUser) {
        const user = auth.currentUser;
        return {
            id: user.uid,
            displayName: user.displayName,
            email: user.email
        };
    } else {
        const provider = new GoogleAuthProvider();
        const authResult = await signInWithPopup(auth, provider);
        const user = authResult.user;
        return {
            id: user.uid,
            displayName: user.displayName,
            email: user.email
        };
    }
};