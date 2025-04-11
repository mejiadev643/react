
import {loginInterface} from '../interfaces/auth';
export const login = async ({username,password}: loginInterface) => {
    return await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({

            username: username,
            password: password,
            //   username: 'emilys',
            //   password: 'emilyspass',
            expiresInMins: 30, // optional, defaults to 60
        }),
        //credentials: 'include', // Include cookies (e.g., accessToken) in the request
    })
    //   .then(res => res.json())
    //   .then(console.log);
}
