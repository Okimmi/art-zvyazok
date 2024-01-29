import {
  ButtonField,
  CheckBoxField,
  FotoBox,
  ProfField,
  ProfileSection,
  SocialField,
} from './Profile.styled';
import { Formik } from 'formik';
import profileImg from '../User/userfoto.png';
import {
  StyledForm,
  StyledField,
  SelelectProf,
  UnderSellectTxt,
  CheckTxt,
  StyledTextarea,
  LinksH3,
  LinkField,
  LinkBox,
  EnterBtn,
  CheckBox,
  ErMessName,
} from './Profile.styled';
import { ReactComponent as Instagram } from '../../images/Instagram.svg';
import { ReactComponent as Discord } from '../../images/discord.svg';
import { ReactComponent as Telegram } from '../../images/telegram.svg';
import { ReactComponent as Spotify } from '../../images/spotify.svg';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, selectUser } from 'Redux/selectors/authSelectors';
import { editUser, register } from 'api';
import { DeleteBtn, UserCard, UserH3 } from 'components/User/User.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema1 = Yup.object({
  username: Yup.string()
    .min(2, 'мінімум 2 символи')
    .max(25, 'максимум 25 символів')
    .matches(
      /^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ']{2,25}$/,
      'Допускаються лише латинські та українські букви'
    )
    .required('Поле "Nickname" є обов\'язковим'),
});

export const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ActivUser = useSelector(selectUser);

  const user = useSelector(getUser);

  const handleSubmit = values => {
    const data = { ...user.user, ...values };
    if (ActivUser.username) {
      dispatch(editUser(data));
    } else {
      dispatch(register(data));
    }
  };

  return (
    <ProfileSection>
      <UserCard>
        <FotoBox>
          <div>
            <img src={profileImg} alt="avatar" width="350" height="350" />
            <EnterBtn style={{ marginTop: '40px' }}>Завантажити фото</EnterBtn>
            <DeleteBtn>Видалити фото</DeleteBtn>
          </div>
          <DeleteBtn className="btn cancel-btn" type="submit">
            Видалити профіль
          </DeleteBtn>
        </FotoBox>

        <Formik
          initialValues={{
            isRemote: false,
            username: ActivUser ? ActivUser.username : '',
            city: ActivUser ? ActivUser.city : '',
            description: ActivUser ? ActivUser.description : '',
            instagram: ActivUser ? ActivUser.instagram : '',
            discord: ActivUser ? ActivUser.discord : '',
            telegram: ActivUser ? ActivUser.telegram : '',
            spotify: ActivUser ? ActivUser.spotify : '',
          }}
          validationSchema={validationSchema1}
          onSubmit={(values, actions) => {
            handleSubmit(values);
            actions.resetForm();
            navigate('/profile');
          }}
        >
          <StyledForm>
            <ProfField>
              <UserH3>Nickname:</UserH3>
              <StyledField type="text" name="username" />
            </ProfField>
            <ErMessName name="username" component="div" />
            <ProfField>
              <UserH3>Спеціалізація:</UserH3>
              <SelelectProf className="selectProf" id="single">
                {/* <option value="">{ActivUser ? ActivUser.roles : '--Спеціалізація--'}</option> */}
                <option value="value 1">Музикант</option>
                <option value="value 2">Value 2</option>
                <option value="value 3">Value 3</option>
              </SelelectProf>
            </ProfField>
            <ProfField>
              <UserH3>Місто:</UserH3>
              <StyledField type="text" name="city" />
            </ProfField>
            <CheckBoxField>
              <UserH3>Дистанційно:</UserH3>
              <UnderSellectTxt className="underSellectTxt">
                <CheckBox type="checkbox" name="isRemote" />
                <CheckTxt className="checkTxt">
                  Я можу працювати дистанційно
                </CheckTxt>
              </UnderSellectTxt>
            </CheckBoxField>
            <ProfField>
              <UserH3>Опис:</UserH3>
              <StyledTextarea
                name="description"
                type="text"
                component="textarea"
                cols="30"
                rows="10"
                // placeholder={ActivUser.description : '' ? "Опис профілю" : ""}
              />
            </ProfField>
            <LinksH3 className="linksHead">Посилання на соцмережі:</LinksH3>
            <LinkBox className="linkBox">
              <SocialField>
                <Instagram></Instagram>
                <LinkField
                  className="linkInput"
                  type="text"
                  placeholder="Instagram"
                  name="instagram"
                />
              </SocialField>
              <SocialField>
                <Discord></Discord>
                <LinkField
                  className="linkInput"
                  type="text"
                  placeholder="Discord"
                  name="discord"
                />
              </SocialField>
              <SocialField>
                <Telegram></Telegram>
                <LinkField
                  className="linkInput"
                  type="text"
                  placeholder="Telegram"
                  name="telegram"
                />
              </SocialField>
              <SocialField>
                <Spotify></Spotify>
                <LinkField
                  className="linkInput"
                  type="text"
                  placeholder="Spotify"
                  name="spotify"
                />
              </SocialField>
            </LinkBox>
            <ButtonField>
              <EnterBtn className="btn save-btn" type="submit">
                Зберегти зміни
              </EnterBtn>

              <DeleteBtn style={{ margin: 0 }} type="submit">
                Скасувати зміни
              </DeleteBtn>
            </ButtonField>
          </StyledForm>
        </Formik>
      </UserCard>
      <ToastContainer autoClose={8000} />
    </ProfileSection>
  );
};
