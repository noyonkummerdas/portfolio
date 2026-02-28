
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define base URL
const API_URL = 'http://localhost:5000/api/cvs';

// Async thunk for fetching CVs
export const fetchCvs = createAsyncThunk('cv/fetchCvs', async () => {
    const response = await axios.get(API_URL);
    return response.data;
});

// Async thunk for uploading a CV
export const uploadCv = createAsyncThunk('cv/uploadCv', async (cvData, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${API_URL}/upload`, cvData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data; // Backend returns the full new CV object
    } catch (error) {
        if (error.response && error.response.data.error) {
            return rejectWithValue(error.response.data.error);
        } else {
            return rejectWithValue(error.message);
        }
    }
});

// Async thunk for fetching a single CV by ID
export const fetchCvById = createAsyncThunk('cv/fetchCvById', async (id, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.error || error.message);
    }
});

// Async thunk for deleting a CV
export const deleteCv = createAsyncThunk('cv/deleteCv', async (id, { rejectWithValue }) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
        return id;
    } catch (error) {
        return rejectWithValue(error.response.data.error || error.message);
    }
});

const cvSlice = createSlice({
    name: 'cv',
    initialState: {
        cvs: [],
        currentCv: null,
        loading: false,
        error: null,
        uploadLoading: false,
        uploadError: null,
        uploadSuccess: false,
    },
    reducers: {
        resetUploadStatus: (state) => {
            state.uploadLoading = false;
            state.uploadError = null;
            state.uploadSuccess = false;
        },
    },
    extraReducers: (builder) => {
        builder
            // Fetch CVs
            .addCase(fetchCvs.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCvs.fulfilled, (state, action) => {
                state.loading = false;
                state.cvs = action.payload;
            })
            .addCase(fetchCvs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            // Upload CV
            .addCase(uploadCv.pending, (state) => {
                state.uploadLoading = true;
                state.uploadError = null;
                state.uploadSuccess = false;
            })
            .addCase(uploadCv.fulfilled, (state, action) => {
                state.uploadLoading = false;
                state.uploadSuccess = true;
                // Add the new CV to the list (backend should return the new CV)
                // If backend returns the list, we can just replace it, but typically we add the single item
                state.cvs.unshift(action.payload); // Add to top
            })
            .addCase(uploadCv.rejected, (state, action) => {
                state.uploadLoading = false;
                state.uploadError = action.payload || action.error.message;
            })
            // Fetch CV by ID
            .addCase(fetchCvById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCvById.fulfilled, (state, action) => {
                state.loading = false;
                state.currentCv = action.payload;
            })
            .addCase(fetchCvById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
            })
            // Delete CV
            .addCase(deleteCv.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteCv.fulfilled, (state, action) => {
                state.loading = false;
                state.cvs = state.cvs.filter(cv => cv._id !== action.payload);
                if (state.currentCv && state.currentCv._id === action.payload) {
                    state.currentCv = null;
                }
            })
            .addCase(deleteCv.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
            });
    },
});

export const { resetUploadStatus } = cvSlice.actions;
export default cvSlice.reducer;
