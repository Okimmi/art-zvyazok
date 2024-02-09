import styled, { css } from 'styled-components';
import { Field } from 'formik';

export const FieldWrapper = styled.div`
  width: 100%;
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
  height: ${({ component }) => (component === 'textarea' ? '120px' : '48px')};
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

  &::placeholder {
    color: #78739a;
  }

  @media screen and (min-width: 1440px) {
    height: ${({ component }) => (component === 'textarea' ? '115px' : '48px')};
  }
`;
