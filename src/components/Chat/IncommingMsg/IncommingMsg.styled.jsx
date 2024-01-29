import styled from 'styled-components';
import { MessageBox } from '../ChatBox/ChatBox.styled';

export const MainChatItemS = styled.div`
  display: grid;
  grid-template-columns: 58px 410px;
  height: fit-content;
  align-items: end;
  gap: 10px;
`;
export const MainChatText = styled(MessageBox)`
  border-radius: 30px 30px 30px 8px;
  background: #fff;
`;

export const CompanionName = styled.p`
  margin-bottom: 8px;
  color: #a32ce9;
  font-size: 16px;
  font-weight: 500;
`;

export const Btn = styled.button`
  padding: 0;
  border: 0 transparent;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
`;
