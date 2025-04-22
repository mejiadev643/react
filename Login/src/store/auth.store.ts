import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "../interfaces/auth";

interface TokenStore {
    accessToken: string | null;
    setAccessToken: (token: string | null) => void;
    removeAccessToken: () => void;

    user: User | null;
    setUser: (user: User | null) => void;
    removeUser: () => void;
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
        }),
        {
            name: "token-storage", // clave en localStorage
            // Puedes usar storage: sessionStorage si prefieres que dure solo la sesión
        }
    )
);
