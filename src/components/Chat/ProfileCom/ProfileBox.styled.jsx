import styled from 'styled-components';
import { ReactComponent as ArrowDown } from './arrow-down.svg';
import { ReactComponent as ArrowUp } from './arrow-up.svg';

export const ProfBox = styled.div`
  display: flex;
  position: relative;
  width: 316px;
  padding: 24px;
  flex-direction: column;
  gap: 24px;
  border-radius: 35px;
  border: 1px solid #ffcce8;
  margin-left: 32px;
  overflow: hidden;
`;

export const StyledArrowDown = styled(ArrowDown)`
  position: absolute;
  top: 24px;
  right: 24px;
  cursor: pointer;
`;
export const StyledArrowUp = styled(ArrowUp)`
  position: absolute;
  top: 24px;
  right: 24px;
  cursor: pointer;
`;
