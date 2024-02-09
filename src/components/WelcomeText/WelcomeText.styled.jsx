import styled from 'styled-components';

export const WelcomeBox = styled.div`
  width: 100%;
  height: fit-content;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(134, 157, 211, 0.15) 100%
  );
  padding: 16px 24px;
  border-radius: 35px;

  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;

  @media screen and (min-width: 390px) {
    width: 339px;
  }

  @media screen and (min-width: 1440px) {
    width: 780px;
    padding: 32px 48px;
    font-size: 20px;
  }
`;

export const Title = styled.p`
  color: #b182ff;
  font-family: 'Montserrat Alternates';
  font-size: 20px;
  font-weight: 500;
  line-height: 1.35;

  @media screen and (min-width: 1440px) {
    font-size: 22px;
  }
`;

export const DescrTxt = styled.p`
  margin-top: 16px;
`;

export const List = styled.ul`
  padding-left: 24px;
  list-style: disc;

  @media screen and (min-width: 1440px) {
    padding-left: 32px;
  }
`;
