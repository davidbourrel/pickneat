import { create } from 'zustand';

interface ActiveCategoryState {
  entries: IntersectionObserverEntry[];
  addEntry: (entry: IntersectionObserverEntry) => void;
  removeEntry: (id: string) => void;
}

export const useActiveCategoryStore = create<ActiveCategoryState>((set) => ({
  entries: [],
  addEntry: (entry) => {
    set((state) => ({
      entries: [...state.entries, entry],
    }));
  },
  removeEntry: (id) => {
    set((state) => ({
      entries: state.entries.filter((entry) => entry.target.id !== id),
    }));
  },
}));
