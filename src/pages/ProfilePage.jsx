import { ContainerChats } from 'components/Container/Container.styled';
import { GlobalStyle } from 'components/GlobalStyle';
import { Profile } from 'components/Profile/Profile';

export const ProfilePage = () => {
  return (
    <>
    <GlobalStyle />
      <ContainerChats>
        <Profile />
      </ContainerChats>
    </>
  );
};
