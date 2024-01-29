import { useState } from 'react';
import { Step } from './Reg.styled';
import { RegFirstStep } from './RegFirstStep/RegFirstStep';
import { UserForm } from 'components/UserForm/UserForm';

export const Reg = ({ onToggleClick }) => {
  const [step, setStep] = useState(1);

  return (
    <>
      <Step>{step}/2</Step>
      {step === 1 && (
        <RegFirstStep
          onChange={onToggleClick}
          onNextStep={() => {
            setStep(2);
          }}
        />
      )}
      {step === 2 && <UserForm></UserForm>}
    </>
  );
};
