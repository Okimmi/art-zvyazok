import { useField } from 'formik';
import { ErMess, FieldWrapper, StyledField } from './AuthInput.styled';

export const AuthInput = ({
  isRequired,
  type,
  name,
  placeholder,
  component,
  children,
}) => {
  const [field, meta] = useField(name);

  return (
    <FieldWrapper $isRequired={isRequired}>
      <StyledField
        component={component}
        type={type}
        placeholder={placeholder}
        {...field}
        error={meta.touched && meta.error}
      />
      {meta.touched && meta.error && <ErMess>{meta.error}</ErMess>}
      {children}
    </FieldWrapper>
  );
};
