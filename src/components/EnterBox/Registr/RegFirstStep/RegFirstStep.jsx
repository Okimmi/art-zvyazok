import { Formik } from 'formik';
import {} from './RegFirstStep.styled';
import { ReactComponent as GoogleIcon } from '../../../../images/devicon_google.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { updateUserData } from 'Redux/actions';
import { useState } from 'react';
import { AuthInput } from 'components/AuthInput/AuthInput';
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
import { Button } from 'components/Global/Button/Button';

const validationSchema1 = Yup.object({
  email: Yup.string()
    .email('Невірний формат електронної пошти')
    .min(5, 'Must be min 5 characters')
    .max(30, 'Must be 30 characters or less')
    .matches(
      /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
      'Допускаються лише латинські символи та цифри'
    )
    .required('Поле "Email" є обов\'язковим'),
  password: Yup.string()
    .min(5, 'Довжина від 8 до 16 символів')
    .max(20, 'Довжина від 8 до 16 символів')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/,
      'Пароль повинен містити щонайменше: одну велику букву, одну малу букву, одну цифру.'
    )
    .required('Поле "Пароль" є обов\'язковим'),
});

export const RegFirstStep = ({ onChange, onNextStep }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <EnterTitle>РЕЄСТРАЦІЯ</EnterTitle>
      <Formik
        initialValues={{
          email: '',
          password: '',
          repeatPassword: '',
        }}
        validationSchema={validationSchema1}
        onSubmit={(values, actions) => {
          onNextStep();
          // console.log('Submitted:', values);
          // dispatch(updateUserData(values));
          // actions.resetForm();
          // navigate('/user');
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
            <AuthInput
              isRequired={true}
              type={showPassword ? 'text' : 'password'}
              placeholder="Пароль (ще раз)"
              name="repeatPassword"
            >
              <EyeBtn onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <StyledShowIcon /> : <StyledHideIcon />}
              </EyeBtn>
            </AuthInput>
          </InputList>
          <Button type="submit">Продовжити</Button>
        </StyledForm>
      </Formik>

      <Text>
        <span>або</span>
      </Text>

      <GoogleButton>
        <GoogleIcon></GoogleIcon>
        Продовжити з Google
      </GoogleButton>

      <UnderBtnBox>
        <UnderBtnTxt>Маєш акаунт?</UnderBtnTxt>
        <RegistTxt
          onClick={() => {
            onChange();
          }}
        >
          Увійти
        </RegistTxt>
      </UnderBtnBox>
    </>
  );
};
