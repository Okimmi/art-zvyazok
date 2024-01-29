import styled from 'styled-components';

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 63px;
  padding: 12px 24px;
  border-radius: 20px;
  border: none;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  background: var(--pink-btn);
  font-family: Montserrat Alternates;
  cursor: pointer;

  &:hover,
  &:focus {
    background: linear-gradient(
      109deg,
      #ff269b 13.07%,
      #e227b3 27.22%,
      #c629cc 42.31%,
      #a92be4 55.08%,
      #892dff 73.65%
    );
  }

  &:active {
    background: linear-gradient(
      109deg,
      #ff269b 13.07%,
      #e227b3 52.76%,
      #c629cc 87.34%
    );
  }
`;
