// import { selectUser } from 'Redux/selectors/authSelectors';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
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
import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Formik } from 'formik';
import { InputList, StyledForm } from 'components/EnterBox/EnterBox.styled';
import { AuthInput } from 'components/AuthInput/AuthInput';
import { Button } from 'components/Global/Button/Button';
import { Select } from 'components/Global/Select/Select';
import { Checkbox } from 'components/Global/Checkbox/Checkbox';
import { ReactComponent as LoadFileIcon } from '../../icons/load-file.svg';

const validationSchema = Yup.object({
  nickname: Yup.string().required('Поле "Nickname" є обов\'язковим'),
  specialization: Yup.string().required('Поле "Спеціалізація" є обов\'язковим'),
  city: Yup.string().required('Поле "Місто" є обов\'язковим'),
  description: Yup.string(),
  instagram: Yup.string(),
  discord: Yup.string(),
  telegram: Yup.string(),
  spotify: Yup.string(),
});

export const UserForm = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const ActivUser = useSelector(selectUser);

  const handleRefresh = () => {};

  useEffect(() => {
    handleRefresh();
  });

  return (
    <Formik
      initialValues={{
        nickname: '',
        specialization: '',
        city: '',
        remotely: false,
        description: '',
        instagram: '',
        discord: '',
        telegram: '',
        spotify: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        // console.log('Submitted:', values);
        // dispatch(updateUserData(values));
        // actions.resetForm();
        // navigate('/user');
      }}
    >
      <StyledForm>
        <InputList>
          <AuthInput isRequired={true} placeholder="Nickname" name="nickname" />
          <Select isRequired={true} name="specialization">
            <option value="" disabled selected>
              Спеціалізація
            </option>
            <option value="musician">Музикант</option>
          </Select>
          <AuthInput isRequired={true} placeholder="Місто" name="city" />
          <Checkbox name="remotely">Я можу працювати дистанційно</Checkbox>
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
              // onChange={}
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
