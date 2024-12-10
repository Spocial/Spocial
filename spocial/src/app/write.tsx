import { getDatabase, set, ref } from "firebase/database";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "./signin/config";
import {Post} from "./post/Post";


const WriteData = () => {
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);

    function register(email: string, password: string) {
        set(ref(database, 'users/' + email), {
            password: password,
            email: email,
        });
    }

    function post(email: string, post: Post){

    }
}

export default WriteData;