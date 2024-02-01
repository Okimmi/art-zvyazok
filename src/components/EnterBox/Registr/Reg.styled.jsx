import { styled } from 'styled-components';
import { ReactComponent as BackArrow } from '../../../icons/back-arrow.svg';

export const Arrow = styled(BackArrow)`
  position: absolute;
  left: 24px;
  top: 24px;
  cursor: pointer;
`;

export const Step = styled.span`
  position: absolute;
  right: 24px;
  top: 24px;
  color: #a32ce9;
  font-family: 'Montserrat Alternates';
  font-size: 18px;
  font-weight: 500;
  line-height: 1.35;
`;
