import { useField } from 'formik';
import { FieldWrapper, StyledField } from './AuthInput.styled';
import { ErMessText, ErMessWrapper } from 'components/EnterBox/EnterBox.styled';

export const AuthInput = ({
  isRequired,
  type,
  name,
  placeholder,
  component,
  children,
  clearState,
}) => {
  const [field, meta] = useField(name);

  const handleChange = e => {
    if (clearState) {
      clearState();
    }

    field.onChange(e);
  };

  return (
    <FieldWrapper $isRequired={isRequired}>
      <StyledField
        component={component}
        type={type}
        placeholder={placeholder}
        {...field}
        $error={meta.touched && meta.error}
        onChange={handleChange}
      />
      {meta.touched && meta.error && (
        <ErMessWrapper>
          <ErMessText>{meta.error}</ErMessText>
        </ErMessWrapper>
      )}
      {children}
    </FieldWrapper>
  );
};
