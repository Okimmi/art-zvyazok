import { styled } from 'styled-components';
import { ReactComponent as BackArrow } from '../../../icons/back-arrow.svg';

export const Arrow = styled(BackArrow)`
  position: absolute;
  left: 18px;
  top: 18px;
  width: 20px;
  height: auto;
  cursor: pointer;

  @media screen and (min-width: 1440px) {
    width: 36px;
    left: 24px;
    top: 24px;
  }
`;

export const Step = styled.span`
  position: absolute;
  right: 16px;
  top: 16px;
  color: #a32ce9;
  font-family: 'Montserrat Alternates';
  font-size: 14px;
  font-weight: 500;
  line-height: 1.35;

  @media screen and (min-width: 1440px) {
    right: 24px;
    top: 24px;
    font-size: 18px;
  }
`;
