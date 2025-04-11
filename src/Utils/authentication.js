import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./firebase"
import { signOut } from "firebase/auth";

export const signUp = async (userInput) => {

    try {
        const { username, email, password } = userInput;
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        await updateProfile(userCredential.user, {
            displayName: username
        })

        await auth.currentUser.reload();
        return auth.currentUser;
    }

    catch (err) {
        console.log(err.code, err.message);
        throw new Error(`${err.code} - ${err.message}`);


    }


}


export const signIn = async (email, password) => {
    try {
        const userCredetials = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        return userCredetials.user;
    } catch (err) {
        throw new Error(`${err.code} - ${err.message}`);
    }
};


export const customSignOut = async () => {
    try {
        await signOut(auth);
        console.log("Sign-out successful");
    } catch (err) {
        console.error(err);
    }
};
