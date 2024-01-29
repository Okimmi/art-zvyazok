import styled, { css } from 'styled-components';
import { Field, ErrorMessage } from 'formik';
import attentionIcon from '../../icons/attention.svg';

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
  height: ${({ component }) => (component === 'textarea' ? '115px' : '48px')};
  width: 100%;
  padding: 12px;
  border-radius: 15px;
  background-color: transparent;
  color: #fff;
  border: 1px solid ${({ error }) => (error ? '#E33629' : '#d0bfed')};
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
`;

export const ErMess = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  color: #a884d6;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5;

  &::before {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background-image: url(${attentionIcon});
  }
`;

export const ErMessPass = styled(ErrorMessage)`
  position: absolute;
  top: 36%;
  color: red;
`;
