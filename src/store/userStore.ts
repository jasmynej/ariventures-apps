import { create } from 'zustand';
import { UserProfile } from "../models";

interface UserStore {
    currentUser: UserProfile | null;
    setCurrentUser: (user: UserProfile) => void;
}

export const useAuthStore = create<UserStore>((set) => ({
    currentUser: null,
    setCurrentUser: (user) => set({ currentUser: user }),
}));

