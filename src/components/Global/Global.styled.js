import { styled } from 'styled-components';

export const Wrapper = styled.div`
  padding: 114px 24px 40px 24px;
  margin: 0 auto;

  @media screen and (max-width: 389px) {
    width: 100%;
  }

  @media screen and (min-width: 390px) {
    width: 390px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    margin-top: 64px;
    padding: 40px 32px 44px 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    margin-top: 112px;
    padding: 82px 40px 40px 40px;
  }
`;
