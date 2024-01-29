import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderSty = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #1e0143;
  height: 98px;
  display: flex;
`;

export const Logo = styled.div`
  width: 200px;
  height: 50px;
  border-radius: 12px;
  background: #865bbf;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 1360px;
`;

export const Nav = styled.nav`
  position: relative;
  display: flex;
  column-gap: 108px;
`;
export const NavLink = styled(Link)`
  color: var(--btn-txt, #fff);
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(110%);
  }
`;

export const ProfBox = styled.div`
  position: relative;
`;
