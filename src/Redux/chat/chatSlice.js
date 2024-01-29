import { fetchAll, fetchActiveChat } from './chatOperations';

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
    builder.addCase(fetchAll.fulfilled, (state, action) => {
      state.chatList = action.payload.items;
      state.isLoading = false;
      state.error = false;
    });
    builder.addCase(fetchAll.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchAll.rejected, state => {
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
