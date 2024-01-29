import { HeaderSty, HeaderContainer, Nav, NavLink, ProfBox } from "./Header.styled"
import '../../index';
import { useAuth } from "Redux/hooks/useAuth";
import { ReactComponent as Prof } from "./profile.svg";
import { ReactComponent as Logo } from "./LOGO.svg";
import { useState } from "react";
import { Modal } from "./Modal";


export const Header = () => {
    const { isLoggedIn } = useAuth();

   const [active, setActive] = useState(true)


    return <HeaderSty className="header">
    <HeaderContainer className="container header-container">
        <Logo className="logo"></Logo>
        {isLoggedIn &&
       ( <Nav>
            <NavLink className="nav-link" to="/main">Головна</NavLink>
            <NavLink className="nav-link" to="/list_of_chats">Чати</NavLink>
            <NavLink className="nav-link" to="#">Контакти</NavLink>
            <NavLink className="nav-link" href="">Правила</NavLink>
            <ProfBox>
        <Modal active={active} setActive={setActive} />
        
        <Prof onClick={() => setActive(true)}></Prof>
        </ProfBox>
            
            
        </Nav>)}

       
    </HeaderContainer>
</HeaderSty>
}
