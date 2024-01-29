import { ChatContainer } from './Chat.styled';

import { ProfileBox } from './ProfileCom/ProfileBox';
import { ChatListBox } from './ChatListBox/ChatListBox';
import { ChatBox } from './ChatBox/ChatBox';

export const Chat = () => {
  return (
    <ChatContainer>
      <ChatListBox />
      <ChatBox />
      <ProfileBox />
    </ChatContainer>
  );
};
