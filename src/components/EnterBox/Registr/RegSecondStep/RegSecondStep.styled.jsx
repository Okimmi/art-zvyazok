import { Field } from 'formik';
import styled from 'styled-components';

export const UserSection = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const UserCard = styled.div`
  display: flex;
  margin: 0 auto;
  width: 1360px;
  padding: 48px;
  gap: 92px;
  border-radius: 35px;
  border: 1px solid var(--form-stroke, #ffcce8);
`;

export const DeleteBtn = styled.button`
  width: 100%;
  display: flex;
  margin-top: 24px;
  height: 63px;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 20px;
  border: 1px solid #533778;
  color: #fff;
  font-family: Montserrat Alternates;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: transparent;
  &:hover {
    transform: scale(105%);
    cursor: pointer;
  }
`;
export const UserList = styled.ul`
  max-width: 812px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const UserH3 = styled.h3`
  color: #fff;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const UserAnswers = styled.p`
  color: #fff;
  font-family: Montserrat;
  margin-top: 16px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const UserSocial = styled.div`
  margin-top: 31px;
  display: flex;
  gap: 45px;
`;

export const Text = styled.p`
  text-align: start;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;

  @media screen and (min-width: 1440px) {
    font-size: 18px;
  }
`;

export const SocialMediaList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin: 16px 0;

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SocialMediaItem = styled.li`
  display: flex;
  gap: 8px;
`;

export const PhotoLoaderWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
`;

export const PhotoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 101px;
  height: 101px;
  min-width: 101px;
  min-height: 101px;
  overflow: hidden;
  border-radius: 50%;
  border: 1px solid #d0bfed;
  stroke: #d0bfed;

  &:hover,
  &:focus {
    border-color: #8b41e0;
    stroke: #8b41e0;
  }
`;

export const UploadInput = styled(Field)`
  display: none;
`;
