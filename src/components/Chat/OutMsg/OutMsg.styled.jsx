import styled from 'styled-components';
import { MessageBox } from '../ChatBox/ChatBox.styled';

export const MainChatItemS = styled.div`
  display: grid;
  grid-template-columns: 410px;
  height: fit-content;
  justify-content: end;
`;
export const MainChatText = styled(MessageBox)`
  border-radius: 35px 35px 8px 35px;
  background: #fdc3e3;
`;
