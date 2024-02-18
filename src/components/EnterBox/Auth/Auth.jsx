import { Formik } from 'formik';
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
  credential: Yup.string().required("Поле є обов'язковим"),
  password: Yup.string()
    .min(6, 'Довжина паролю має бути від 6 до 18 символів')
    .max(18, 'Довжина паролю має бути від 6 до 18 символів')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      'Пароль повинен містити щонайменше: одну велику букву, одну малу букву, одну цифру.'
    )
    .required("Поле є обов'язковим"),
});

export const Auth = ({ onToggleClick }) => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <EnterTitle>ВХІД В АКАУНТ</EnterTitle>
      <Formik
        initialValues={{
          credential: '',
          password: '',
        }}
        validationSchema={validationSchema1}
        onSubmit={(values, actions) => {
          dispatch(
            logIn({
              credential: values.credential,
              password: values.password,
            })
          );
        }}
      >
        <StyledForm>
          <InputList>
            <AuthInput
              isRequired={true}
              type="credential"
              placeholder="Email або Username"
              name="credential"
            />
            <AuthInput
              isRequired={true}
              type={showPassword ? 'text' : 'password'}
              placeholder="Пароль"
              name="password"
            >
              <EyeBtn
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
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

      <GoogleButton>Продовжити з Google</GoogleButton>

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
