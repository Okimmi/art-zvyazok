import styled from 'styled-components';
import { Form } from 'formik';
import { ReactComponent as ShowIcon } from '../../icons/show_icon.svg';
import { ReactComponent as HideIcon } from '../../icons/hide_icon.svg';
import attentionIcon from '../../icons/attention.svg';
import googleIcon from '../../icons/devicon_google.svg';

export const EnterContainer = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  height: fit-content;
  padding: 22px 18px;
  border: solid 3px #ffcce8;
  border-radius: 35px;

  @media screen and (min-width: 390px) {
    width: 342px;
  }

  @media screen and (min-width: 1440px) {
    width: 548px;
    padding: 48px;
  }
`;

export const EnterTitle = styled.h2`
  color: var(--h-1, #ff82c6);
  font-size: 24px;
  font-family: Montserrat Alternates;
  font-weight: 500;
  line-height: normal;

  @media screen and (min-width: 1440px) {
    font-size: 26px;
  }
`;

export const InputList = styled.div`
  margin-bottom: 24px;
`;

export const EyeBtn = styled.button`
  position: absolute;
  background: transparent;
  border: none;
  top: 24px;
  right: 8px;
  transform: translateY(-50%);
  cursor: pointer;
`;

const eyeIconStyles = `
display: block;
fill: #d0bfed;
width: 18px;
height: 18px;

&:hover,
&:focus {
  fill: #8b41e0;
}`;

export const StyledShowIcon = styled(ShowIcon)`
  ${eyeIconStyles}
`;

export const StyledHideIcon = styled(HideIcon)`
  ${eyeIconStyles}
`;

export const StyledForm = styled(Form)`
  margin-top: 24px;
  width: 100%;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  margin: 16px 0;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;

  &::before,
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: #6f5492;
  }

  @media screen and (min-width: 1440px) {
    font-size: 18px;
  }
`;

export const UnderBtnBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  gap: 8px;
`;
export const UnderBtnTxt = styled.div`
  color: #fff;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;

  @media screen and (min-width: 1440px) {
    font-size: 18px;
  }
`;
export const RegistTxt = styled.div`
  font-family: Montserrat Alternates;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  background: var(--pink-btn);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;

  &:hover,
  &:focus {
    background: linear-gradient(
      109deg,
      #ff269b 13.07%,
      #e227b3 27.22%,
      #c629cc 42.31%,
      #a92be4 55.08%,
      #892dff 73.65%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &:active {
    background: linear-gradient(
      109deg,
      #ff269b 13.07%,
      #e227b3 52.76%,
      #c629cc 87.34%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
`;

export const GoogleButton = styled.button`
  width: 100%;
  display: flex;
  height: 56px;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  font-family: Montserrat Alternates;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  color: #fff;
  border-radius: 20px;
  border: 1px solid #533778;
  cursor: pointer;

  &::before {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background-image: url(${googleIcon});
    background-size: contain;

    @media screen and (min-width: 1440px) {
      width: 30px;
      height: 30px;
    }
  }

  &:hover {
    border-color: #6f5492;
  }

  @media screen and (min-width: 1440px) {
    height: 63px;
    font-size: 18px;
  }
`;

export const ErMessWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
  gap: 11px;
  margin-top: 8px;
  color: #a884d6;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.5;

  &::before {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background-image: url(${attentionIcon});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    gap: 8px;
  }
`;

export const ErMessText = styled.p`
  width: fit-content;
  text-align: start;
`;
