import { configureStore } from '@reduxjs/toolkit';
import togglesReducer from './slices/togglesSlice';

export const store = configureStore({
  reducer: {
    toggles: togglesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;