import styled from 'styled-components';

export const Title = styled.h2`
  margin: 0 auto;

  color: #ff82c6;
  font-family: Montserrat Alternates;
  font-size: 18px;
  font-weight: 400;
`;

export const MemberInfoContainer = styled.div`
  display: flex;
  gap: 10px;

  color: #fff;
  font-family: Montserrat Alternates;
  font-size: 14px;
  font-weight: 400;
`;

export const RowFirst = styled.p`
  :not(:last-child) {
    margin-right: 10px;
  }

  margin-bottom: 8px;
`;

export const RowSecond = styled.p`
  :not(:last-child) {
    margin-right: 16px;
  }
`;

export const Name = styled.span`
  font-weight: 500;
  font-size: 16px;
`;

export const Status = styled.span`
  font-size: 12px;

  &::before {
    content: '';
    display: inline-block;
    margin-right: 8px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ff82c6;
  }
`;
