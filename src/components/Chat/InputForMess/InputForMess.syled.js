import styled from 'styled-components';
import { Form, Field } from 'formik';

export const MessageForm = styled(Form)`
  display: flex;
  gap: 10px;
  justify-content: space-between;
`;

export const InputWrapper = styled.div`
  width: 100%;
  border-radius: 30px;
  background: var(--form-stroke-gradient);
`;

export const Input = styled(Field)`
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  transform: translate(1px, 1px);
  display: flex;
  padding: 12px;
  align-items: flex-start;
  border-radius: 30px;
  border: 0;
  background: #fff;

  &::placeholder {
    color: #78739a;
  }
`;

export const AttachBtn = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  cursor: pointer;
`;

export const SendBtn = styled.button`
  border-radius: 17px;
  min-width: 46px;
  height: 46px;
  border: 0 solid transparent;
  background: var(--pink-btn);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 0 2px;
  cursor: pointer;
`;
