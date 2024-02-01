import { useField } from 'formik';
import {
  CustomArrow,
  ErMess,
  FieldWrapper,
  StyledField,
} from './Select.styled';

export const Select = ({ isRequired, type, name, children }) => {
  const [field, meta] = useField(name);
  return (
    <FieldWrapper $isRequired={isRequired}>
      <StyledField
        type={type}
        {...field}
        $error={meta.touched && meta.error}
        component="select"
        className={field.value === '' ? 'placeholder' : ''}
      >
        {children}
      </StyledField>
      <CustomArrow />
      {meta.touched && meta.error && <ErMess>{meta.error}</ErMess>}
    </FieldWrapper>
  );
};
