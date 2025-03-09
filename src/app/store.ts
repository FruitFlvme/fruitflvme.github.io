import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import userReducer from '@/features/user/userSlice';
import { counterReducer } from '@/features/cat/counterSlice.ts';
import { quotesReducer } from '@/features/quotes/quotesSlice.ts';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    // Add your reducers here
    counter: counterReducer,
    user: userReducer,
    quotes: quotesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
