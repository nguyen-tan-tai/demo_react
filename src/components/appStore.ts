import { create } from 'zustand';

interface AppStore {
    isOpen: boolean;
    openMenu: () => void;
    closeMenu: () => void;
    toggleMenu: () => void;
}

export const useAppStore = create<AppStore>((set) => ({
    isOpen: false,
    openMenu: () => set(() => ({ isOpen: true })),
    closeMenu: () => set(() => ({ isOpen: false })),
    toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
}));
