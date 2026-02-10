
import { configureStore } from '@reduxjs/toolkit';
import cvReducer from '../features/cv/cvSlice';

export const store = configureStore({
    reducer: {
        cv: cvReducer,
    },
});
