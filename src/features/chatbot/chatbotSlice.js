import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosInstance';

export const sendMessage = createAsyncThunk(
    'chatbot/sendMessage',
    async (userMessage, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post('/chatbot/message', { message: userMessage });
            return response.data; // Backend returns { reply: "..." }
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Sorry, I am having trouble connecting to NK\'s brain right now.');
        }
    }
);

const chatbotSlice = createSlice({
    name: 'chatbot',
    initialState: {
        messages: [
            { id: 1, text: "Hi! I'm NK Noyon's AI proxy. I pull data directly from his professional graph. What would you like to know about his experience?", sender: 'ai' }
        ],
        loading: false,
        error: null,
    },
    reducers: {
        clearChat: (state) => {
            state.messages = [state.messages[0]]; // Keep initial message
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendMessage.pending, (state, action) => {
                state.loading = true;
                state.error = null;
                // Add user message immediately for better UX
                state.messages.push({
                    id: Date.now(),
                    text: action.meta.arg,
                    sender: 'user',
                });
            })
            .addCase(sendMessage.fulfilled, (state, action) => {
                state.loading = false;
                state.messages.push({
                    id: Date.now() + 1,
                    text: action.payload.reply,
                    sender: 'ai',
                });
            })
            .addCase(sendMessage.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.messages.push({
                    id: Date.now() + 1,
                    text: action.payload || "Sorry, I'm having trouble connecting to NK's brain right now.",
                    sender: 'ai',
                });
            });
    },
});

export const { clearChat } = chatbotSlice.actions;
export default chatbotSlice.reducer;
