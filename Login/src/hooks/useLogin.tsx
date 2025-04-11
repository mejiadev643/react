import React from "react";
import { login } from "../services/authService.ts";
import { removeToken, removeUser, setToken, setUser } from "../utils/token";
import { User, loginInterface } from "../interfaces/auth";


export const useLogin = () => {
    const [error, setError] = React.useState<boolean>(false);

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const username = formData.get('username');
        const password = formData.get('password');

        if (!username || !password) {
            setError(true);
            return;
        }
        // Attempt to login
        try {
            const response = await login({username, password} as loginInterface); // Call the login function from authService

            // Check if the response was successful
            if (response.ok) {
                const data = await response.json(); // Parse the JSON response
                removeToken(); // Remove any existing token
                removeUser(); // Remove any existing user data
                setToken(data.accessToken); // Store the token
                const userData:User = {
                    email: data.email,
                    firstname: data.firstName,
                    gender: data.gender,
                    id: data.id,
                    image: data.image,
                    lastName: data.lastName,
                    username: data.username,
                }
                setUser(userData); // Store the user data
                // Redirect to the dashboard or another page usin react-router-dom
                window.location.href = '/dashboard'; // Redirect to the dashboard

            } else {
                setError(true);
            }
        } catch (error) {
            setError(true);
            console.error('Login failed:', error);
        }
    };


    return { error, handleLogin };
};