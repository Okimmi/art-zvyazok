import { useState } from 'react';
import Modal from 'react-modal';
import { MessageTime } from '../ChatBox/ChatBox.styled';
import { CompanionAvatar } from '../CompanionAvatar/CompanionAvatar';
import { MessageText } from '../CurrentChat/CurrentChat.styled';
import {
  MainChatText,
  MainChatItemS,
  CompanionName,
  Btn,
} from './IncommingMsg.styled';
import { ProfileModal } from '../ProfileModal/ProfileModal';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,85%)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'var(--purple-bg',
    width: '316px',
    borderRadius: '35px',
    border: '0',
  },
};

export const IncommingMsg = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <MainChatItemS>
      <Btn onClick={openModal}>
        <CompanionAvatar />
      </Btn>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <ProfileModal onClose={() => closeModal()} />
      </Modal>
      <MainChatText>
        <div>
          <CompanionName>Dr Black</CompanionName>
          <MessageText>
            main axis - головна вісь flex-контейнера, вздовж якої розташовуються
            елементи. Вона не обов'язково горизонтальна, її напрямок
            контролюється властивістю flex-direction. main-start і main-end -
            елементи в контейнері завжди розташовуються від main-start (початок
            головної осі) і до main-end (кінець головної осі). cross axis -
            поперечна вісь, яка завжди перпендикулярна до головної осі. Її
            напрямок залежить від головної осі і явно не встановлюється.
            cross-start і cross-end - початок і кінець поперечної осі, вздовж
            якої розташовуються рядки елементів.
          </MessageText>
        </div>
        <MessageTime>00:00</MessageTime>
      </MainChatText>
    </MainChatItemS>
  );
};
