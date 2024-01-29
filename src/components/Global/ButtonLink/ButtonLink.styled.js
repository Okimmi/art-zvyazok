import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Btn = styled(Link)`
  margin-top: 16px;
  color: #fff;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;

  &:hover,
  &:focus {
    text-decoration-line: underline;
  }

  &:active {
    font-weight: 600;
  }
`;
