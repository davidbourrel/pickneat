import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ActiveCategoryState {
  entries: IntersectionObserverEntry[];
}

const initialState: ActiveCategoryState = { entries: [] };

const activeCategorySlice = createSlice({
  name: 'activeCategory',
  initialState,
  reducers: {
    addEntry: (state, action: PayloadAction<IntersectionObserverEntry>) => {
      const entryItemIndex = state.entries.find(
        (entry) => entry.target.id === action.payload.target.id
      );

      if (!entryItemIndex) {
        state.entries.push(action.payload as any);
      }
    },
    removeEntry: (state, action: PayloadAction<string>) => {
      state.entries = state.entries.filter(
        (entry) => entry.target.id !== action.payload
      );
    },
  },
});

export const { addEntry, removeEntry } = activeCategorySlice.actions;

export default activeCategorySlice.reducer;
