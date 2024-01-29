import styled from 'styled-components';

export const MainContainer = styled.div`
    margin: 0 auto;
    width: 1360px;
`
export const WelcomeText = styled.h3`
    margin-top: 24px;
    color: #FFF;
    font-family: Montserrat Alternates;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 135%;
`

export const Cell = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 316px;
    height: 273px;
    flex-shrink: 0;
    border-radius: 30px;
    background: #D0BFED;
`
export const CellText = styled.p`
    color: var(--, #160132);
    font-family: Montserrat Alternates;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 135%;
`


export const CellContainer = styled.div`
    margin-top: 40px;
    display: flex; 
    gap: 32px;
   
`

export const NewsHead = styled.h2`
    color: var(--h1, #FF82C6);
    font-family: Montserrat Alternates;
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: 135%;
`

export const NewsContainer = styled.div`
    display: grid;
    grid-template-columns: 664px 316px 316px; 
    grid-auto-rows: 273px;
    gap: 32px;

  
`;

export const NewsCell = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 30px;
    background: #ABABAB;

   `
 