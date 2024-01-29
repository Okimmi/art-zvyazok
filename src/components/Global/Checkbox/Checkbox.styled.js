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
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
`;

export const Box = styled(Field)`
  display: none;
`;
