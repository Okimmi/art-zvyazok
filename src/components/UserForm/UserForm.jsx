import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import {
  SocialMediaList,
  SocialMediaItem,
  Text,
  PhotoBox,
  PhotoLoaderWrapper,
  UploadInput,
} from './UserForm.styled';
import { ReactComponent as Instagram } from '../../images/Instagram.svg';
import { ReactComponent as Discord } from '../../images/discord.svg';
import { ReactComponent as Telegram } from '../../images/telegram.svg';
import { ReactComponent as Spotify } from '../../images/spotify.svg';
import 'react-toastify/dist/ReactToastify.css';
import { Formik } from 'formik';
import { InputList, StyledForm } from 'components/EnterBox/EnterBox.styled';
import { AuthInput } from 'components/AuthInput/AuthInput';
import { Button } from 'components/Global/Button/Button';
import { Select } from 'components/Global/Select/Select';
import { Checkbox } from 'components/Global/Checkbox/Checkbox';
import { ReactComponent as LoadFileIcon } from '../../icons/load-file.svg';
import { register } from 'Redux/auth/operations';

const validationSchema = Yup.object({
  username: Yup.string().required('Поле "Nickname" є обов\'язковим'),
  roles: Yup.string().required('Поле "Спеціалізація" є обов\'язковим'),
  city: Yup.string().required('Поле "Місто" є обов\'язковим'),
  description: Yup.string(),
  instagramLink: Yup.string(),
  discordLink: Yup.string(),
  telegramLink: Yup.string(),
  spotifyLink: Yup.string(),
});

export const UserForm = ({ userData }) => {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    dispatch(register({ ...userData, ...values }));
  };

  return (
    <Formik
      initialValues={{
        username: '',
        roles: '',
        city: '',
        isRemote: false,
        description: '',
        instagramLink: '',
        discordLink: '',
        telegramLink: '',
        spotifyLink: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <InputList>
          <AuthInput isRequired={true} placeholder="Nickname" name="username" />
          <Select isRequired={true} name="roles" defaultValue="">
            <option value="" disabled>
              Спеціалізація
            </option>
            <option value="0">Музикант</option>
          </Select>
          <AuthInput isRequired={true} placeholder="Місто" name="city" />
          <Checkbox name="isRemote">Я можу працювати дистанційно</Checkbox>
          <AuthInput
            isRequired={false}
            placeholder="Опис профілю"
            name="description"
            component={'textarea'}
          />
          <Text>Посилання на соцмережі:</Text>
          <SocialMediaList>
            <SocialMediaItem>
              <Instagram />
              <AuthInput
                isRequired={false}
                placeholder="Instagram"
                name="instagram"
              />
            </SocialMediaItem>
            <SocialMediaItem>
              <Discord />
              <AuthInput
                isRequired={false}
                placeholder="Discord"
                name="discord"
              />
            </SocialMediaItem>
            <SocialMediaItem>
              <Telegram />
              <AuthInput
                isRequired={false}
                placeholder="Telegram"
                name="telegram"
              />
            </SocialMediaItem>
            <SocialMediaItem>
              <Spotify />
              <AuthInput
                isRequired={false}
                placeholder="Spotify"
                name="spotify"
              />
            </SocialMediaItem>
          </SocialMediaList>
          <PhotoLoaderWrapper>
            <UploadInput
              type="file"
              id="file-input"
              accept="image/*, .png, .jpeg, .gif, .web"
            />
            <PhotoBox>
              <LoadFileIcon />
            </PhotoBox>
            <Text>Завантажити фото профілю</Text>
          </PhotoLoaderWrapper>
        </InputList>
        <Button type="submit">Зареєструватися</Button>
      </StyledForm>
    </Formik>
  );
};
