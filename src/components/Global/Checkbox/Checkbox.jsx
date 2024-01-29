import { Box, Text, Wrapper } from './Checkbox.styled';
import { ReactComponent as CheckboxDone } from '../../../icons/check-box-done.svg';
import { ReactComponent as CheckboxDef } from '../../../icons/check-box.svg';

import { useField } from 'formik';

export const Checkbox = ({ name, children }) => {
  const [field] = useField(name);

  return (
    <Wrapper>
      <Box type="checkbox" name={name} />
      {field.value ? <CheckboxDone /> : <CheckboxDef />}
      <Text>{children}</Text>
    </Wrapper>
  );
};
