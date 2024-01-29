import { Cell, CellContainer, CellText, MainContainer, NewsCell, NewsContainer, NewsHead, WelcomeText } from "./Main.styled"
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from 'react-redux';
import { selectTopArtists } from "Redux/selectors/topArtistsSelectors";
import { useEffect } from "react";
import { displayTopArtists } from "Redux/newsOperations";
import { useDispatch } from 'react-redux';

export const Main = () => {
    const dispatch = useDispatch();
   const  top= useSelector(selectTopArtists);

   useEffect(() => {
    console.log('Dispatching displayTopArtists');
    dispatch(displayTopArtists());
  }, [dispatch]);

    console.log(top);

    return (
        <MainContainer>
        <WelcomeText>Ласкаво просимо на наш веб-портал для творчих душ!</WelcomeText>
        <CellContainer>
            <Cell><CellText>Перейти до чатів</CellText></Cell>
            <Cell><CellText>Редагувати профіль</CellText></Cell>
            <Cell><CellText>Шукати друзів</CellText></Cell>
            <Cell><CellText>Правила спільноти</CellText></Cell>
        </CellContainer>
        <NewsHead>Top Artists(by last.fm)</NewsHead> 
        <NewsContainer>
        {top.topArtists.map(({ mbid, name, playcount, listeners, url, image }) => (
  <NewsCell key={mbid} style={{ backgroundImage: `url(${image[1]['#text']})` }}>
    <h3>{name}</h3>
    <p>Playcount: {playcount}</p>
    <p>Listeners: {listeners}</p>
    <a href={url} target="_blank" rel="noopener noreferrer">Learn More</a>
  </NewsCell>
))}
        </NewsContainer>
        <ToastContainer autoClose={8000}/>
        </MainContainer>
        
    )

}