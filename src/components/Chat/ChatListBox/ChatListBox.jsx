import { useSelector } from 'react-redux';
import { ChatList } from '../ChatList/ChatList';
import { ChatListBoxHeader } from '../СhatListBoxHeader/СhatListBoxHeader';
import { ChatBox, ChatBoxBorder } from './ChatListBox.styled';
import { selectChatList, selectIsGeneralChatType } from 'Redux/chat/selectors';
import { Loader } from 'components/Loader/Loader';

export const ChatListBox = () => {
  const isGeneralChat = useSelector(selectIsGeneralChatType);
  const chatList = useSelector(selectChatList);

  return (
    <ChatBoxBorder>
      <ChatBox isGeneralChat={isGeneralChat}>
        <ChatListBoxHeader />
        {chatList.length === 0 && <Loader />}
        <ChatList />
      </ChatBox>
    </ChatBoxBorder>
  );
};
