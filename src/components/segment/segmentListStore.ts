import { create } from 'zustand';

interface SegmentListStore {
    count: number;
    increment: () => void;
    decrement: () => void;
}

export const useSegmentListStore = create<SegmentListStore>((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
}));
