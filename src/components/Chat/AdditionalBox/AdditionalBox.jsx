import { ProfBox } from './AdditionalBox.styled';
import { ChatMembers } from '../ChatMembers/ChatMembers';
import { useSelector } from 'react-redux';
import { selectIsGeneralChatType } from 'Redux/chat/selectors';
import { PrifileDetails } from '../PrifileDetails/PrifileDetails';

export const AdditionalBox = () => {
  const isGeneral = useSelector(selectIsGeneralChatType);

  return (
    <>
      <ProfBox>{isGeneral ? <ChatMembers /> : <PrifileDetails />}</ProfBox>
    </>
  );
};
