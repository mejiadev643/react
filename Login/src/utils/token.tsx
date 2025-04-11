import { User } from "../interfaces/auth";

export const getToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
        return token;
    }
    return null;
}
export const setToken = (token: string) => {
    localStorage.setItem('token', token);
}
export const removeToken = () => {
    localStorage.removeItem('token');
}
export const getUser = () => {
    const userString = localStorage.getItem('user');
    return userString ? JSON.parse(userString) : null;
};
export const setUser = (user: User) => {
    localStorage.setItem('user', JSON.stringify(user));
}
export const removeUser = () => {
    localStorage.removeItem('user');
}