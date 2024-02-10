import { StyledArrowDown, StyledArrowUp } from './PrifileDetails.styled';
import { useState } from 'react';
import { ProfileInfo } from '../ProfileInfo/ProfileInfo';

export const PrifileDetails = () => {
  const [boxOpen, setBoxOpen] = useState(false);

  const toggleProfBox = () => {
    setBoxOpen(!boxOpen);
  };

  return (
    <>
      {!boxOpen ? (
        <StyledArrowDown onClick={toggleProfBox} />
      ) : (
        <StyledArrowUp onClick={toggleProfBox} />
      )}
      <ProfileInfo isBoxOpen={boxOpen} />
    </>
  );
};
