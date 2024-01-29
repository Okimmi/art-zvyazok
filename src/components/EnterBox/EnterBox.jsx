import { Reg } from 'components/EnterBox/Registr/Reg';
import { useState } from 'react';
import { Auth } from 'components/EnterBox/Auth/Auth';
import { ENTER_TYPE } from 'constants';
import { EnterContainer } from './EnterBox.styled';

export const EnterBox = () => {
  const [enterType, setEnterType] = useState(ENTER_TYPE.LOGIN);

  return (
    <EnterContainer>
      {enterType === ENTER_TYPE.LOGIN && (
        <Auth onToggleClick={() => setEnterType(ENTER_TYPE.REGISTER)}></Auth>
      )}
      {enterType === ENTER_TYPE.REGISTER && (
        <Reg onToggleClick={() => setEnterType(ENTER_TYPE.LOGIN)}></Reg>
      )}
    </EnterContainer>
  );
};
