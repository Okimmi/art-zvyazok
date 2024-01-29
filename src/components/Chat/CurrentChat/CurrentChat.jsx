import { IncommingMsg } from '../IncommingMsg/IncommingMsg';
import { OutMsg } from '../OutMsg/OutMsg';
import { useEffect, useRef } from 'react';
import { MainChatListBox, TimeSeparator } from './CurrentChat.styled';

export const CurrentChat = () => {
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, []);

  return (
    <MainChatListBox ref={chatContainerRef}>
      <TimeSeparator>Сьогодні</TimeSeparator>
      <IncommingMsg></IncommingMsg>
      <OutMsg></OutMsg>
    </MainChatListBox>
  );
};
