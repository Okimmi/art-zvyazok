import { useSelector } from 'react-redux';
import {
  Avatar,
  MemberInfoContainer,
  MemberItem,
  MembersList,
  Name,
  RowFirst,
  RowSecond,
  Status,
  Title,
} from './ChatMembers.styled';
import { selectChatMembers } from 'Redux/chat/selectors';
import { rolesDictionary } from 'dictionaries/roles';
import { ReactComponent as Line } from '../../../icons/member-list-line.svg';

export const ChatMembers = () => {
  const members = useSelector(selectChatMembers);

  return (
    <>
      {console.dir(members)}
      <Title>Список учасників чату</Title>
      <MembersList>
        {members?.map(({ user: { id, username, roles, city, isRemote } }) => (
          <MemberItem key={id}>
            <MemberInfoContainer>
              <Avatar />
              <div>
                <RowFirst>
                  <Name>{username}</Name>
                  <Status>у мережі</Status>
                </RowFirst>
                <RowSecond>
                  {rolesDictionary[roles] && (
                    <div>{rolesDictionary[roles]}</div>
                  )}
                  <div>{city}</div>
                  {isRemote && <div>Дистанційно</div>}
                </RowSecond>
              </div>
            </MemberInfoContainer>
            <Line />
          </MemberItem>
        ))}
      </MembersList>
    </>
  );
};
