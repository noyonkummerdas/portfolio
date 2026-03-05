import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosInstance';

// ১. ইউজার হিসেবে মেসেজ পাঠানো
export const sendMessage = createAsyncThunk(
    'chatbot/sendMessage',
    async (userMessage, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post('/chatbot/message', { message: userMessage });
            return response.data; // Backend returns { reply: "..." }
        } catch (error) {
            return rejectWithValue(error.response?.data?.error || 'Sorry, I am having trouble connecting to NK\'s brain right now.');
        }
    }
);

// ২. এডমিন হিসেবে সব চ্যাট হিস্ট্রি লোড করা (Admin Only)
export const fetchChatHistory = createAsyncThunk(
    'chatbot/fetchHistory',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get('/chatbot/history');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.error || 'Failed to fetch history');
        }
    }
);

// ৩. এডমিন হিসেবে কোনো চ্যাটের রিপ্লাই দেওয়া (Admin Only)
export const adminReplyToChat = createAsyncThunk(
    'chatbot/adminReply',
    async ({ chatId, reply }, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.patch('/chatbot/reply', { chatId, reply });
            return response.data.chat;
        } catch (error) {
            return rejectWithValue(error.response?.data?.error || 'Failed to send reply');
        }
    }
);

const chatbotSlice = createSlice({
    name: 'chatbot',
    initialState: {
        messages: [
            { id: 1, text: "Hi! I'm NK Noyon's AI proxy. I pull data directly from his professional graph. What would you like to know about his experience?", sender: 'ai' }
        ],
        history: [], // Stores full chat objects for Admin
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
            // sendMessage handling
            .addCase(sendMessage.pending, (state, action) => {
                state.loading = true;
                state.error = null;
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
            })
            // fetchChatHistory handling
            .addCase(fetchChatHistory.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchChatHistory.fulfilled, (state, action) => {
                state.loading = false;
                state.history = action.payload;
            })
            .addCase(fetchChatHistory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // adminReplyToChat handling
            .addCase(adminReplyToChat.fulfilled, (state, action) => {
                const index = state.history.findIndex(c => c._id === action.payload._id);
                if (index !== -1) {
                    state.history[index] = action.payload;
                }
            });
    },
});

export const { clearChat } = chatbotSlice.actions;
export default chatbotSlice.reducer;
