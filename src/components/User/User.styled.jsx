
import styled from 'styled-components';


export const UserSection = styled.div`
    padding-top: 40px;
    padding-bottom: 40px;
`

export const UserCard = styled.div`
    display: flex;
    margin: 0 auto;
    width: 1360px;
    padding: 48px;
    gap: 92px;
    border-radius: 35px;
    border: 1px solid var(--form-stroke, #FFCCE8);

`


export const DeleteBtn = styled.button`
    width: 100%;
    display: flex;
    margin-top: 24px;
    height: 63px;
    padding: 12px 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 20px;
    border: 1px solid #533778;
    color: #FFF;
    font-family: Montserrat Alternates;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background: transparent;
    &:hover {
        transform: scale(105%);
        cursor: pointer;
    }
 
`
export const UserList = styled.ul`
    max-width: 812px;
    display: flex;
    flex-direction: column;
    gap:32px;

`

export const UserH3 = styled.h3`
    color: #FFF;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

`
export const UserAnswers = styled.p`
    color: #FFF;
    font-family: Montserrat;
    margin-top: 16px;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

`

export const UserSocial = styled.div`
    margin-top: 31px;
    display: flex;
    gap:45px;  
`



