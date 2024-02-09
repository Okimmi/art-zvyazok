import { Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { AuthInput } from 'components/AuthInput/AuthInput';
import {
  ErMessText,
  ErMessWrapper,
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

import { $instance } from 'Redux/constants';

const validationSchema = Yup.object({
  email: Yup.string()
    .matches(
      /^[A-Za-z0-9._-]+@([a-zA-Z0-9-]+.{1})+[a-zA-Z0-9-]{2,}$/,
      'Невірний формат електронної пошти'
    )
    .required("Поле є обов'язковим"),
  password: Yup.string()
    .min(6, 'Довжина паролю має бути від 6 до 18 символів')
    .max(18, 'Довжина паролю має бути від 6 до 18 символів')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      'Пароль повинен містити щонайменше: одну велику букву, одну малу букву, одну цифру.'
    )
    .required("Поле є обов'язковим"),
  repeatPassword: Yup.string()
    .oneOf(
      [Yup.ref('password'), null],
      'Повторний пароль не збігається з введеним.'
    )
    .required("Поле є обов'язковим"),
});

export const RegFirstStep = ({
  onChange,
  onNextStep,
  userData,
  setUserData,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isAlreadyRegistered, setIsAlreadyRegistered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const finishFirstStep = async values => {
    try {
      setIsLoading(true);
      await $instance.get(`/api/User/ue/${values.email}`);
      setIsAlreadyRegistered(true);
    } catch (error) {
      if (error.response.status === 404) {
        setUserData(values);
        onNextStep();
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={
          userData || {
            email: '',
            password: '',
            repeatPassword: '',
          }
        }
        validationSchema={validationSchema}
        onSubmit={finishFirstStep}
      >
        <StyledForm>
          <InputList>
            <AuthInput
              isRequired={true}
              type="email"
              placeholder="Email"
              name="email"
              clearState={() => {
                isAlreadyRegistered && setIsAlreadyRegistered(false);
              }}
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
          {isAlreadyRegistered && (
            <ErMessWrapper>
              <ErMessText>
                Користувач з таким імʼям вже зареєстрований.
              </ErMessText>
            </ErMessWrapper>
          )}

          <Button type="submit" isLoading={isLoading}>
            Продовжити
          </Button>
        </StyledForm>
      </Formik>

      <Text>
        <span>або</span>
      </Text>

      <GoogleButton>Продовжити з Google</GoogleButton>

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
