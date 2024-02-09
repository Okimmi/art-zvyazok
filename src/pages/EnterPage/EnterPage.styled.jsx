import styled from 'styled-components';

export const ContentWraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;
