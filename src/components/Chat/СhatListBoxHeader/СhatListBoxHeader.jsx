import { HeaderBox, HeaderLink } from './ChatListBoxHeader.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setChatType } from 'Redux/chat/chatSlice';
import {
  selectChatType,
  selectFirstPublicChat,
  selectFirstPrivateChat,
} from 'Redux/selectors/chatSelectors';

export const ChatListBoxHeader = () => {
  const dispatch = useDispatch();
  const isGeneralChat = useSelector(selectChatType);
  const location = useLocation();
  const firstPublicChat = useSelector(selectFirstPublicChat);
  const firstPrivateChat = useSelector(selectFirstPrivateChat);

  return (
    <HeaderBox>
      <HeaderLink
        to={`/chat/${firstPublicChat}`}
        state={location}
        isGeneralChat={isGeneralChat}
        side="left"
        onClick={() => {
          dispatch(setChatType(true));
        }}
      >
        Загальні чати
      </HeaderLink>
      <HeaderLink
        to={`/chat/${firstPrivateChat}`}
        isGeneralChat={isGeneralChat}
        side="right"
        onClick={() => {
          dispatch(setChatType(false));
        }}
      >
        Особисті чати
      </HeaderLink>
    </HeaderBox>
  );
};
