import styled from 'styled-components';

export const MainChatListBox = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  padding: 16px;
  overflow-y: scroll;
  background: radial-gradient(
    58.4% 92.17% at 100% 50%,
    #8500ef 0%,
    #7801d7 19.58%,
    #5b00a5 37.9%,
    #45017c 55.88%,
    #2d0252 76.85%,
    #170025 100%
  );
  border-right: 1px solid #dec4ff;
`;

export const MessageText = styled.p`
  color: #160132;
  font-size: 18px;
  font-weight: 400;
`;

export const TimeSeparator = styled.p`
  text-align: center;

  color: #d9c3fd;
  font-size: 16px;
  font-weight: 400;
`;
