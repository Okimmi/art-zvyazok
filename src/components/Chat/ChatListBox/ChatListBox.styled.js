import styled from 'styled-components';

export const ChatBox = styled.div`
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  transform: translate(1px, 1px);
  background: ${props => {
    return props.isGeneralChat ? '#efe6ff' : '#ffe2f8';
  }};
  border-radius: 35px;
  overflow: hidden;
`;

export const ChatBoxBorder = styled.div`
  width: 348px;
  background: var(--form-stroke-gradient);
  border-radius: 35px;
  overflow: hidden;
`;
