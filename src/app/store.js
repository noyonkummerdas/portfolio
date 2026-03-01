import { configureStore } from '@reduxjs/toolkit';
import cvReducer from '../features/cv/cvSlice';
import hireMeReducer from '../features/hireMeSlice';
import authReducer from '../features/auth/authSlice';
import chatbotReducer from '../features/chatbot/chatbotSlice';

export const store = configureStore({
    reducer: {
        cv: cvReducer,
        hireMe: hireMeReducer,
        auth: authReducer,
        chatbot: chatbotReducer,
    },
});
