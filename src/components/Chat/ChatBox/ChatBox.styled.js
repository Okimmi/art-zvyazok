import styled from 'styled-components';

export const MainChatBox = styled.div`
  display: flex;
  width: 664px;
  border-radius: 35px;
  flex-direction: column;
  justify-content: space-between;

  background: ${props => {
    return props.isGeneralChat ? '#efe6ff' : '#ffe2f8';
  }};
`;

export const MainChatHeadBox = styled.div`
  position: relative;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const MainChatHead = styled.h2`
  font-family: Montserrat Alternates;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  color: ${props => {
    return props.isGeneralChat ? '#ff82c6' : '#9D73E0';
  }};
`;

export const MainChatForm = styled.div`
  border-radius: 0px 0px 35px 35px;
  padding: 24px 16px;

  background: ${props => {
    return props.isGeneralChat ? '#efe6ff' : '#ffe2f8';
  }};
`;

export const ChatBoxSubtitle = styled.p`
  font-size: 16px;
  font-weight: 400;

  color: ${props => {
    return props.isGeneralChat ? '##5b5b5b' : '#FF82C6';
  }};
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
`;

export const MessageTime = styled.span`
  color: #a09aa8;
  font-size: 14px;
  font-weight: 400;
`;

export const MessageBox = styled.div`
  display: flex;
  gap: 10px;
  align-items: end;
  padding: 10px 16px;
  height: fit-content;
`;
