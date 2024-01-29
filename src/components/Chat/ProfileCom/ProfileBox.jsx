import { ProfBox, StyledArrowDown, StyledArrowUp } from './ProfileBox.styled';
import { useState } from 'react';
import { ProfileInfo } from '../ProfileInfo/ProfileInfo';
import { ChatMembers } from '../ChatMembers/ChatMembers';

export const ProfileBox = () => {
  const [isProfOpen, setProfOpen] = useState(false);
  const [boxHeight, setBoxHeight] = useState('256px'); // Исходно высота "fit-content"

  const toggleProfBox = () => {
    setProfOpen(!isProfOpen);
    setBoxHeight(isProfOpen ? '256px' : 'max-content');
  };

  return (
    <>
      <ProfBox style={{ height: boxHeight }}>
        {/* {!isProfOpen ? (
          <StyledArrowDown onClick={toggleProfBox} />
        ) : (
          <StyledArrowUp onClick={toggleProfBox} />
        )} */}
        {/* <ProfileInfo /> */}
        <ChatMembers />
      </ProfBox>
    </>
  );
};
