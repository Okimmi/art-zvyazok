import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ChatItemText = styled(NavLink)`
  display: block;
  padding: 17px 16px;
  background: var(--pink-btn);
  cursor: pointer;

  -webkit-background-clip: text;
  color: transparent;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #160132;

  &:hover,
  &.active {
    background: var(--pink-btn);
    -webkit-background-clip: text;
    color: transparent;
  }
`;
