import { getDatabase, set, ref } from "firebase/database";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "./signin/config";
import {Post} from "./post/Post";

interface WriteDataType {
    register: (email: string, password: string) => void;
    post: (post: Post) => void;
    accountemail: string;
}

const WriteData: WriteDataType = (() => {
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);

    let accountemail: string = "";

    //format for each user:
    /*
    {
     "users": {
        email: {
        "email": email,
        "password": password (this is very insecure but temporary),
        "posts": {
            "ingredients": {ingredient1, ingredient2, etc},
            "steps": {step1, step2, etc}
            },
        },
        "ghopper": { ... },
        "eclarke": { ... }
        }
    }
     */

    function register(email: string, password: string) {
        accountemail = email;
        set(ref(database, 'users/' + accountemail), {
            password: password,
            email: accountemail,
        });
    }

    function post(post: Post){
        //uses email as the index and then post is the contents of the post
        //updating posts not allowed atm

        set(ref(database, 'users/' + accountemail + '/post/'), {
            ingredients: post._ingredients,
            steps: post._steps
        });
    }

    return {register, post, accountemail};
})();

export default WriteData;