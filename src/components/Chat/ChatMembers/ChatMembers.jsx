import { CompanionAvatar } from '../CompanionAvatar/CompanionAvatar';
import {
  MemberInfoContainer,
  Name,
  RowFirst,
  RowSecond,
  Status,
  Title,
} from './ChatMembers.styled';

export const ChatMembers = () => {
  return (
    <>
      <Title>Список учасників чату</Title>
      <MemberInfoContainer>
        <CompanionAvatar />
        <div>
          <RowFirst>
            <Name>Name</Name>
            <Status>у мережі</Status>
          </RowFirst>
          <RowSecond>
            <span>Prof</span>
            <span>City</span>
            <span>homeoffice</span>
          </RowSecond>
        </div>
      </MemberInfoContainer>
    </>
  );
};
