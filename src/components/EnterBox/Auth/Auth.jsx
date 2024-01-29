import { Formik } from 'formik';
import { ReactComponent as GoogleIcon } from '../../../icons/devicon_google.svg';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from 'api';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { AuthInput } from 'components/AuthInput/AuthInput';
import { Button } from 'components/Global/Button/Button';
import { ButtonLink } from 'components/Global/ButtonLink/ButtonLink';
import {
  EnterTitle,
  EyeBtn,
  GoogleButton,
  InputList,
  RegistTxt,
  StyledForm,
  StyledHideIcon,
  StyledShowIcon,
  Text,
  UnderBtnBox,
  UnderBtnTxt,
} from 'components/EnterBox/EnterBox.styled';

const validationSchema1 = Yup.object({
  email: Yup.string()
    .email('Невірний формат електронної пошти')
    .min(5, 'Must be min 5 characters')
    .max(35, 'Must be 15 characters or less')
    .matches(
      /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
      'Допускаються лише латинські символи та цифри'
    )
    .required('Поле "Email" є обов\'язковим'),
  password: Yup.string()
    .min(5, 'Довжина від 8 до 16 символів')
    .max(20, 'Довжина від 8 до 16 символів')
    // .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/, 'Пароль повинен містити щонайменше: одну велику букву, одну малу букву, одну цифру.')
    .required('Поле "Пароль" є обов\'язковим'),
});

export const Auth = ({ onToggleClick }) => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <EnterTitle>ВХІД В АКАУНТ</EnterTitle>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema1}
        onSubmit={(values, actions) => {
          dispatch(
            logIn({
              email: values.email,
              password: values.password,
            })
          );
        }}
      >
        <StyledForm>
          <InputList>
            <AuthInput
              isRequired={true}
              type="email"
              placeholder="Email"
              name="email"
            />
            <AuthInput
              isRequired={true}
              type={showPassword ? 'text' : 'password'}
              placeholder="Пароль"
              name="password"
            >
              <EyeBtn onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <StyledShowIcon /> : <StyledHideIcon />}
              </EyeBtn>
            </AuthInput>
          </InputList>
          <Button type="submit">Увійти</Button>
        </StyledForm>
      </Formik>

      <ButtonLink>Забули пароль?</ButtonLink>

      <Text>
        <span>або</span>
      </Text>

      <GoogleButton>
        <GoogleIcon></GoogleIcon>
        Продовжити з Google
      </GoogleButton>

      <UnderBtnBox>
        <UnderBtnTxt>Вперше тут?</UnderBtnTxt>
        <RegistTxt
          onClick={() => {
            onToggleClick();
          }}
        >
          Зареєструватися
        </RegistTxt>
      </UnderBtnBox>
    </>
  );
};
