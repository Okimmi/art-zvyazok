import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import {
  SocialMediaList,
  SocialMediaItem,
  Text,
  PhotoBox,
  PhotoLoaderWrapper,
  UploadInput,
} from './RegSecondStep.styled';
import { ReactComponent as Instagram } from '../../../../images/Instagram.svg';
import { ReactComponent as Discord } from '../../../../images/discord.svg';
import { ReactComponent as Telegram } from '../../../../images/telegram.svg';
import { ReactComponent as Spotify } from '../../../../images/spotify.svg';
import 'react-toastify/dist/ReactToastify.css';
import { Formik } from 'formik';
import { InputList, StyledForm } from 'components/EnterBox/EnterBox.styled';
import { AuthInput } from 'components/AuthInput/AuthInput';
import { Button } from 'components/Global/Button/Button';
import { Select } from 'components/Global/Select/Select';
import { Checkbox } from 'components/Global/Checkbox/Checkbox';
import { ReactComponent as LoadFileIcon } from '../../../../icons/load-file.svg';
import { register } from 'Redux/auth/operations';
import { useState } from 'react';
import { rolesDictionary } from 'dictionaries/roles';

const validationSchema = Yup.object({
  username: Yup.string().required('Поле "Nickname" є обов\'язковим'),
  roles: Yup.string().required('Поле "Спеціалізація" є обов\'язковим'),
  city: Yup.string().required('Поле "Місто" є обов\'язковим'),
  description: Yup.string(),
  instagramLink: Yup.string()
    .nullable()
    .matches(
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
      'Некоректный URL'
    ),
  discordLink: Yup.string()
    .nullable()
    .matches(
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
      'Некоректный URL'
    ),
  telegramLink: Yup.string()
    .nullable()
    .matches(
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
      'Некоректный URL'
    ),
  spotifyLink: Yup.string()
    .nullable()
    .matches(
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
      'Некоректный URL'
    ),
});

export const RegSecondStep = ({ userData }) => {
  const dispatch = useDispatch();
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [avatar, setAvatar] = useState(null);

  const handleSubmit = values => {
    dispatch(
      register({
        email: userData.email,
        password: userData.password,
        avatar,
        ...values,
      })
    );
  };

  const handleAvatarUpload = e => {
    const file = e.target.files[0];
    setAvatar(file);
    const reader = new FileReader();

    reader.onloadend = () => {
      setAvatarUrl(reader.result);
    };

    if (avatar) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <Formik
      initialValues={{
        username: '',
        roles: '',
        city: '',
        isRemote: false,
        description: '',
        instagramLink: null,
        discordLink: null,
        telegramLink: null,
        spotifyLink: null,
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
            {Object.entries(rolesDictionary).map(([key, value]) => (
              <option value={key}>{value}</option>
            ))}
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
                name="instagramLink"
              />
            </SocialMediaItem>
            <SocialMediaItem>
              <Discord />
              <AuthInput
                isRequired={false}
                placeholder="Discord"
                name="discordLink"
              />
            </SocialMediaItem>
            <SocialMediaItem>
              <Telegram />
              <AuthInput
                isRequired={false}
                placeholder="Telegram"
                name="telegramLink"
              />
            </SocialMediaItem>
            <SocialMediaItem>
              <Spotify />
              <AuthInput
                isRequired={false}
                placeholder="Spotify"
                name="spotifyLink"
              />
            </SocialMediaItem>
          </SocialMediaList>
          <PhotoLoaderWrapper>
            <UploadInput
              name="avatar"
              type="file"
              id="file-input"
              accept="image/*, .png, .jpeg, .gif, .web"
              onChange={handleAvatarUpload}
            />
            <PhotoBox>
              {avatarUrl ? (
                <img src={avatarUrl} alt="Uploaded avatar" />
              ) : (
                <LoadFileIcon />
              )}
            </PhotoBox>
            <Text>Завантажити фото профілю</Text>
          </PhotoLoaderWrapper>
        </InputList>
        <Button type="submit">Зареєструватися</Button>
      </StyledForm>
    </Formik>
  );
};
