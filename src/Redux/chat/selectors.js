import { createSelector } from '@reduxjs/toolkit';

export const selectIsGeneralChatType = state => state.chat.isGeneralChat;

export const selectChatList = state => state.chat.chatList;

export const selectActiveChatTopic = state => state.chat.activeChat?.topic;

export const selectChatMembers = state => state.chat.activeChat?.members;

export const selectMemberaNumber = state =>
  state.chat.activeChat?.members.length;

export const selectCurrentChatList = createSelector(
  [selectIsGeneralChatType, selectChatList],
  (type, list) => {
    return list.filter(({ isPublic }) => isPublic === type);
  }
);

export const selectFirstPublicChat = createSelector([selectChatList], list => {
  const firstPublicChat = list.find(({ isPublic }) => isPublic === true);
  if (!firstPublicChat) {
    return null;
  }
  return firstPublicChat.id;
});

export const selectFirstPrivateChat = createSelector([selectChatList], list => {
  const firstPrivateChat = list.find(({ isPublic }) => isPublic === false);
  if (!firstPrivateChat) {
    return null;
  }
  return firstPrivateChat.id;
});
