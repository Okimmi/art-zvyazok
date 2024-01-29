import { Button } from 'components/Global/Button/Button';
import { ProfileInfo } from '../ProfileInfo/ProfileInfo';
import { CloseBtn, ProfileWrapper } from './ProfileModal.styled';
import { RxCross1 } from 'react-icons/rx';

export const ProfileModal = ({ onClose }) => {
  return (
    <ProfileWrapper>
      <CloseBtn onClick={onClose}>
        <RxCross1 />
      </CloseBtn>
      <ProfileInfo />
      <Button>Написати</Button>
    </ProfileWrapper>
  );
};
