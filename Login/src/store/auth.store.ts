import { create } from "zustand";
import { persist } from "zustand/middleware";
import CryptoJS from 'crypto-js';
import { User } from "../interfaces/auth";

const SECRET_KEY = 'secret_key';//normalmente viene de un archivo .env
interface TokenStore {
    accessToken: string | null;
    setAccessToken: (token: string | null) => void;
    removeAccessToken: () => void;

    user: User | null;
    setUser: (user: User | null) => void;
    removeUser: () => void;

    clearStorage: () => void; // Nueva función para limpiar el almacenamiento persistente
}

export const useTokenStore = create<TokenStore>()(
    persist(
        (set) => ({
            accessToken: null,
            setAccessToken: (token) => set({ accessToken: token }),
            removeAccessToken: () => set({ accessToken: null }),

            user: null,
            setUser: (user) => set({ user }),
            removeUser: () => set({ user: null }),

            // Nueva función para limpiar el almacenamiento persistente
            clearStorage: () => {
                localStorage.removeItem("token-storage");
                //set({ accessToken: null, user: null }); // Limpia el estado local también
            },
        }),
        {
            name: "token-storage", // clave en localStorage
            // Puedes usar storage: sessionStorage si prefieres que dure solo la sesión
            storage: {
                getItem: (name) => {
                    const encrypted = localStorage.getItem(name);
                    if (!encrypted) return null;
                
                    try {
                        const bytes = CryptoJS.AES.decrypt(encrypted, SECRET_KEY);
                        const decrypted = bytes.toString(CryptoJS.enc.Utf8);
                
                        // Intenta parsear el valor como JSON
                        try {
                            return JSON.parse(decrypted);
                        } catch {
                            // Si no es JSON, retorna el string directamente
                            return decrypted;
                        }
                    } catch (err) {
                        console.error('Error al desencriptar:', err);
                        return null;
                    }
                },
                setItem: (name, value) => {
                    if (value === null) {
                        localStorage.removeItem(name);
                        return;
                    }
                    const stringValue = typeof value === "string" ? value : JSON.stringify(value);
                    const encrypted = CryptoJS.AES.encrypt(stringValue, SECRET_KEY).toString();
                    localStorage.setItem(name, encrypted);
                },
                removeItem: (name) => localStorage.removeItem(name),
            },
        }
    )
);
