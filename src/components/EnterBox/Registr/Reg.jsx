import { useState } from 'react';
import { Arrow, Step } from './Reg.styled';
import { RegFirstStep } from './RegFirstStep/RegFirstStep';
import { UserForm } from 'components/UserForm/UserForm';

export const Reg = ({ onToggleClick }) => {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState(null);

  return (
    <>
      <Step>{step}/2</Step>
      {step === 1 && (
        <RegFirstStep
          userData={userData}
          setUserData={setUserData}
          onChange={onToggleClick}
          onNextStep={() => {
            setStep(2);
          }}
        />
      )}
      {step === 2 && (
        <>
          <Arrow onClick={() => setStep(1)} />
          <UserForm userData={userData}></UserForm>
        </>
      )}
    </>
  );
};
