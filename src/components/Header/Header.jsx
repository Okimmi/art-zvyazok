import {
  HeaderSty,
  HeaderContainer,
  Nav,
  StyledNavLink,
  ProfBox,
} from './Header.styled';
import '../../index';
import { useAuth } from 'Redux/hooks/useAuth';
import { ReactComponent as Prof } from './profile.svg';
import { ReactComponent as Logo } from './LOGO.svg';
import { useState } from 'react';
import { Modal } from './Modal';
import { Link } from 'react-router-dom';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  const [active, setActive] = useState(true);

  return (
    <HeaderSty>
      <HeaderContainer>
        <Link to="/">
          <Logo></Logo>
        </Link>
        {isLoggedIn && (
          <Nav>
            <StyledNavLink to="/main">Головна</StyledNavLink>
            <StyledNavLink to="/list_of_chats">Чати</StyledNavLink>
            <StyledNavLink to="#">Контакти</StyledNavLink>
            <StyledNavLink href="">Правила</StyledNavLink>
            <ProfBox>
              <Modal active={active} setActive={setActive} />

              <Prof onClick={() => setActive(true)}></Prof>
            </ProfBox>
          </Nav>
        )}
      </HeaderContainer>
    </HeaderSty>
  );
};
