import styled from 'styled-components';

export const Title = styled.h2`
  text-align: center;

  color: #ff82c6;
  font-family: Montserrat Alternates;
  font-size: 18px;
  font-weight: 400;
`;

export const MembersList = styled.ul`
  color: #fff;
  font-family: Montserrat Alternates;
  font-size: 14px;
  font-weight: 400;
`;

export const MemberItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 32px;
  }
`;

export const MemberInfoContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 12px;
`;

export const RowFirst = styled.p`
  display: flex;
  flex-wrap: wrap;
  gap: 2px 10px;
  margin-bottom: 8px;
`;

export const RowSecond = styled.p`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
`;

export const Name = styled.div`
  font-weight: 500;
  font-size: 16px;
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 12px;

  &::before {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ff82c6;
  }
`;

export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  min-width: 50px;
  min-height: 50px;
  border-radius: 50%;
  background-color: red;
  overflow: hidden;
`;
