import { ChatContainer } from './Chat.styled';

import { ChatListBox } from './ChatListBox/ChatListBox';
import { ChatBox } from './ChatBox/ChatBox';
import { AdditionalBox } from './AdditionalBox/AdditionalBox';

export const Chat = () => {
  return (
    <ChatContainer>
      <ChatListBox />
      <ChatBox />
      <AdditionalBox />
    </ChatContainer>
  );
};
