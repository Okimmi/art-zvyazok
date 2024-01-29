import { fetchAll } from 'Redux/chat/chatOperations';
import { selectUserId } from 'Redux/selectors/authSelectors';
import { Chat } from 'components/Chat/Chat';
import { PageContainer } from 'components/Container/Container.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const ChatPage = () => {
  const userId = useSelector(selectUserId);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAll(userId));
  }, [dispatch, userId]);

  return (
    <PageContainer>
      <Chat />
    </PageContainer>
  );
};
