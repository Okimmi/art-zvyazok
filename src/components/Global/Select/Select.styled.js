import styled, { css } from 'styled-components';
import { Field, ErrorMessage } from 'formik';
import { ReactComponent as Arrow } from '../../../icons/selector-arrow.svg';

export const FieldWrapper = styled.div`
  ${({ $isRequired }) =>
    $isRequired &&
    css`
      position: relative;
      width: 100%;

      &::after {
        content: '*';
        position: absolute;
        top: 3px;
        right: 8px;
        color: #e33629;
        font-size: 20px;
        font-weight: 400;
        line-height: normal;
      }
    `}

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const StyledField = styled(Field)`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  height: 48px;
  width: 100%;
  padding: 12px;
  border-radius: 15px;
  background-color: transparent;
  color: #fff;
  border: 1px solid ${({ $error }) => ($error ? '#E33629' : '#d0bfed')};
  font-size: 18px;
  font-weight: 400;
  transition: border-color var(--animation-time) var(--animation-cubic);

  &:hover,
  &:focus,
  &:active {
    border-color: #8b41e0;
  }

  &.placeholder {
    color: #78739a;
  }
`;

export const ErMessPass = styled(ErrorMessage)`
  position: absolute;
  top: 36%;
  color: red;
`;

export const CustomArrow = styled(Arrow)`
  position: absolute;
  top: 12px;
  right: 12px;
  pointer-events: none;
`;
