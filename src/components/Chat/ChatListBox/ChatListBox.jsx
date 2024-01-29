import { useSelector } from 'react-redux';
import { ChatList } from '../ChatList/ChatList';
import { ChatListBoxHeader } from '../СhatListBoxHeader/СhatListBoxHeader';
import { ChatBox, ChatBoxBorder } from './ChatListBox.styled';
import { selectChatType } from 'Redux/selectors/chatSelectors';

export const ChatListBox = () => {
  const isGeneralChat = useSelector(selectChatType);

  return (
    <ChatBoxBorder>
      <ChatBox isGeneralChat={isGeneralChat}>
        <ChatListBoxHeader />
        <ChatList />
      </ChatBox>
    </ChatBoxBorder>
  );
};
