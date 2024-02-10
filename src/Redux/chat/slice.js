import { fetchAllChats, fetchActiveChat } from './operations';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  chatList: [],
  isGeneralChat: true,
  activeChat: null,
  isLoading: false,
  error: null,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setChatType: {
      reducer(state, action) {
        state.isGeneralChat = action.payload;
      },
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchAllChats.fulfilled, (state, action) => {
      state.chatList = action.payload.items;
      state.isLoading = false;
      state.error = false;
    });
    builder.addCase(fetchAllChats.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllChats.rejected, state => {
      state.isLoading = false;
      state.error = true;
    });
    builder.addCase(fetchActiveChat.fulfilled, (state, action) => {
      state.activeChat = action.payload;
      state.isLoading = false;
      state.error = false;
    });
    builder.addCase(fetchActiveChat.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchActiveChat.rejected, state => {
      state.isLoading = false;
      state.error = true;
    });
  },
});

export const { setChatType, setActiveChat } = chatSlice.actions;
export const chatReducer = chatSlice.reducer;
