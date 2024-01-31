import { selectUser } from 'Redux/auth/selectors';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import profileImg from './userfoto.png';
import {
  DeleteBtn,
  UserAnswers,
  UserCard,
  UserH3,
  UserList,
  UserSection,
  UserSocial,
} from './User.styled';
import { ReactComponent as Instagram } from '../../images/Instagram.svg';
import { ReactComponent as Discord } from '../../images/discord.svg';
import { ReactComponent as Telegram } from '../../images/telegram.svg';
import { ReactComponent as Spotify } from '../../images/spotify.svg';
import { EnterBtn } from 'components/EnterBox/Auth/Auth.styled';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const User = () => {
  const ActivUser = useSelector(selectUser);
  const navigate = useNavigate();

  const handleRefresh = () => {};

  useEffect(() => {
    handleRefresh();
  });

  return (
    <UserSection>
      <UserCard>
        <div>
          <img src={profileImg} alt="avatar" width="350" height="350" />
          <EnterBtn style={{ marginTop: '40px' }}>Завантажити фото</EnterBtn>
          <DeleteBtn>Видалити фото</DeleteBtn>
        </div>

        <UserList>
          <li>
            <UserH3>Nickname:</UserH3>
            <UserAnswers>{ActivUser.username}</UserAnswers>
          </li>
          <li>
            <UserH3>Спеціалізація:</UserH3>
            <UserAnswers>тут скоро буде</UserAnswers>
          </li>
          <li>
            <UserH3>Місто:</UserH3>
            <UserAnswers>{ActivUser.city}</UserAnswers>
          </li>
          <li>
            <UserH3>Дистанційно:</UserH3>
            <UserAnswers>{ActivUser.isRemote ? 'так' : 'ні'}</UserAnswers>
          </li>
          <li>
            <UserH3>Опис:</UserH3>
            <UserAnswers>{ActivUser.description}</UserAnswers>
          </li>
          <li>
            <UserH3>Посилання на соцмережі:</UserH3>
            <UserSocial>
              <Instagram />
              <Discord /> <Telegram /> <Spotify />
            </UserSocial>
          </li>

          <li>
            <EnterBtn type="button" onClick={() => navigate('/user')}>
              Редагувати
            </EnterBtn>
          </li>
        </UserList>
      </UserCard>
      <ToastContainer autoClose={8000} />
    </UserSection>
  );
};
