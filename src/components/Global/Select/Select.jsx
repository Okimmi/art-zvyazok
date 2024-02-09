import { useField } from 'formik';
import { CustomArrow, FieldWrapper, StyledField } from './Select.styled';
import { ErMessText, ErMessWrapper } from 'components/EnterBox/EnterBox.styled';

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
      {meta.touched && meta.error && (
        <ErMessWrapper>
          <ErMessText>{meta.error}</ErMessText>
        </ErMessWrapper>
      )}
    </FieldWrapper>
  );
};
