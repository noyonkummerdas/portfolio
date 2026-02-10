
import { configureStore } from '@reduxjs/toolkit';
import cvReducer from '../features/cv/cvSlice';
import hireMeReducer from '../features/hireMeSlice';

export const store = configureStore({
    reducer: {
        cv: cvReducer,
        hireMe: hireMeReducer,
    },
});
