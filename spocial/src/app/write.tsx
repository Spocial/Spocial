import { getDatabase, set, ref } from "firebase/database";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "./signin/config";
import {Post} from "./post/Post";


const WriteData = () => {
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);

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
        set(ref(database, 'users/' + email), {
            password: password,
            email: email,
        });
    }

    function post(email: string, post: Post){
        //uses email as the index and then post is the contents of the post
        //updating posts not allowed atm

        set(ref(database, 'users/' + email + '/post/'), {
            ingredients: post._ingredients,
            steps: post._steps
        });
    }
}

export default WriteData;