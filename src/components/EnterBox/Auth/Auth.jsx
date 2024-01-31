import { Formik } from 'formik';
import { ReactComponent as GoogleIcon } from '../../../icons/devicon_google.svg';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from 'Redux/auth/operations';
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
    .matches(
      /^[A-Za-z0-9._-]+@([a-zA-Z0-9-]+.{1})+[a-zA-Z0-9-]{2,}$/,
      'Невірний формат електронної пошти'
    )
    .required("Поле є обов'язковим"),
  password: Yup.string().required("Поле є обов'язковим"),
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
