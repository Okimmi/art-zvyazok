import {
  AvatarWrapper,
  ChatBoxSubtitle,
  MainChatBox,
  MainChatForm,
  MainChatHead,
  MainChatHeadBox,
} from './ChatBox.styled';
import { CurrentChat } from '../CurrentChat/CurrentChat';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectActiveChatTopic,
  selectIsGeneralChatType,
  selectMemberaNumber,
} from 'Redux/chat/selectors';
import { CompanionAvatar } from '../CompanionAvatar/CompanionAvatar';
import { InputForMess } from '../InputForMess/InputForMess';
import { useEffect } from 'react';
import { fetchActiveChat } from 'Redux/chat/operations';
import { useLocation } from 'react-router-dom';

export const ChatBox = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const isGeneralChat = useSelector(selectIsGeneralChatType);
  const chatTopic = useSelector(selectActiveChatTopic);
  const membersNumber = useSelector(selectMemberaNumber);

  useEffect(() => {
    const parceLocation = location.pathname.split('/');
    if (parceLocation[1] === 'chat') {
      const chatId = parceLocation[2];
      dispatch(fetchActiveChat(chatId));
    }
  }, [dispatch, location.pathname]);

  return (
    <MainChatBox isGeneralChat={isGeneralChat}>
      <MainChatHeadBox>
        <MainChatHead isGeneralChat={isGeneralChat}>
          {isGeneralChat ? chatTopic : 'ОСОБИСТИЙ ЧАТ'}
        </MainChatHead>
        <ChatBoxSubtitle isGeneralChat={isGeneralChat}>
          {isGeneralChat ? `${membersNumber} учасників` : 'У мережі'}
        </ChatBoxSubtitle>
        {!isGeneralChat && (
          <AvatarWrapper>
            <CompanionAvatar />
          </AvatarWrapper>
        )}
      </MainChatHeadBox>
      <CurrentChat />
      <MainChatForm isGeneralChat={isGeneralChat}>
        <InputForMess />
      </MainChatForm>
    </MainChatBox>
  );
};
