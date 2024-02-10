import { fetchAllChats } from 'Redux/chat/operations';
import { selectUserId } from 'Redux/auth/selectors';
import { Chat } from 'components/Chat/Chat';
import { PageContainer } from 'components/Container/Container.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const ChatPage = () => {
  const userId = useSelector(selectUserId);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllChats(userId));
  }, [dispatch, userId]);

  return (
    <PageContainer>
      <Chat />
    </PageContainer>
  );
};
