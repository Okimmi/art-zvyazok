import { Formik } from 'formik';
import {
  AttachBtn,
  Input,
  InputWrapper,
  MessageForm,
  SendBtn,
} from './InputForMess.syled';
import { ReactComponent as Attach } from './attach.svg';
import { ReactComponent as Send } from './send.svg';

export const InputForMess = () => {
  return (
    <Formik
      initialValues={{
        message: '',
      }}
      onSubmit={(values, actions) => {
        console.log(values.message);
        actions.setSubmitting(false);
      }}
    >
      <MessageForm>
        <AttachBtn type="button">
          <Attach />
        </AttachBtn>
        <InputWrapper>
          <Input type="text" name="message" placeholder="Повідомлення..." />
        </InputWrapper>
        <SendBtn type="submit">
          <Send />
        </SendBtn>
      </MessageForm>
    </Formik>
  );
};
