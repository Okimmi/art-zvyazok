import { useSelector } from 'react-redux';
import { ChatItemText } from './ChatList.styled';
import { selectCurrentChatList } from 'Redux/chat/selectors';
import { useLocation } from 'react-router-dom';

export const ChatList = () => {
  const chatList = useSelector(selectCurrentChatList);
  const location = useLocation();

  return (
    <ul>
      {chatList.map(({ topic, id }) => (
        <li key={id}>
          <ChatItemText to={`/chat/${id}`} state={location}>
            {topic}
          </ChatItemText>
        </li>
      ))}
    </ul>
  );
};
