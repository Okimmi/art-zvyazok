import styled from 'styled-components';

export const WelcomeBox = styled.div`
  width: 780px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(134, 157, 211, 0.15) 100%
  );
  padding: 32px 48px;
  border-radius: 35px;
`;

export const Title = styled.p`
  margin-bottom: 16px;
  color: #b182ff;
  font-family: 'Montserrat Alternates';
  font-size: 22px;
  font-weight: 500;
  line-height: 1.35;
`;

export const DescrTxt = styled.p`
  margin-bottom: 16px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
`;

export const List = styled.ul`
  padding-left: 32px;
  list-style: disc;
`;
