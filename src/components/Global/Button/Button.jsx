import { Btn } from './Button.styled';

export const Button = ({ children, isLoading }) => {
  return (
    <Btn type="submit" disabled={isLoading}>
      {children}
    </Btn>
  );
};
