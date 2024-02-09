import { Field } from 'formik';
import styled from 'styled-components';

export const Wrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  cursor: pointer;
  stroke: #d0bfed;

  &:hover,
  &:focus {
    stroke: #8b41e0;
  }
`;

export const Text = styled.p`
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.012rem;
  text-align: start;
  line-height: normal;

  @media screen and (min-width: 1440px) {
    font-size: 18px;
  }
`;

export const Box = styled(Field)`
  display: none;
`;
