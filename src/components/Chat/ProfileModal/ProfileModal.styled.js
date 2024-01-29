import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  right: 4px;
  top: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0;
  border: 0;
  width: 24px;
  height: 24px;
  color: #a32ce9;
  background-color: transparent;

  cursor: pointer;
`;
