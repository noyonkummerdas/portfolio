
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/hire-me';

export const fetchSubmissions = createAsyncThunk('hireMe/fetchSubmissions', async () => {
    const response = await axios.get(API_URL);
    return response.data;
});

export const submitHireMe = createAsyncThunk('hireMe/submitHireMe', async (formData, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${API_URL}/submit`, formData);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.error || error.message);
    }
});

const hireMeSlice = createSlice({
    name: 'hireMe',
    initialState: {
        submissions: [],
        loading: false,
        error: null,
        submitLoading: false,
        submitSuccess: false,
        submitError: null,
    },
    reducers: {
        resetSubmitStatus: (state) => {
            state.submitLoading = false;
            state.submitSuccess = false;
            state.submitError = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSubmissions.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSubmissions.fulfilled, (state, action) => {
                state.loading = false;
                state.submissions = action.payload;
            })
            .addCase(fetchSubmissions.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(submitHireMe.pending, (state) => {
                state.submitLoading = true;
                state.submitError = null;
                state.submitSuccess = false;
            })
            .addCase(submitHireMe.fulfilled, (state, action) => {
                state.submitLoading = false;
                state.submitSuccess = true;
                state.submissions.unshift(action.payload.data);
            })
            .addCase(submitHireMe.rejected, (state, action) => {
                state.submitLoading = false;
                state.submitError = action.payload;
            });
    },
});

export const { resetSubmitStatus } = hireMeSlice.actions;
export default hireMeSlice.reducer;
