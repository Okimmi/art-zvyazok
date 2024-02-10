import { ReactComponent as Instagram } from '../../../images/Instagram.svg';
import { ReactComponent as Discord } from '../../../images/discord.svg';
import { ReactComponent as Telegram } from '../../../images/telegram.svg';
import { ReactComponent as Spotify } from '../../../images/spotify.svg';
import profileImg from '../../Chat/profimg.png';
import {
  MediaList,
  Overview,
  ProfHead,
  ProfName,
  ProfTextBox,
  ProfTxt,
} from './ProfileInfo.styled';

export const ProfileInfo = ({ isBoxOpen }) => {
  return (
    <>
      <ProfHead>
        <img src={profileImg} alt="imgProf" />
        <ProfName>Dr Black</ProfName>
      </ProfHead>
      <ProfTextBox>
        <ProfTxt>Музикант</ProfTxt>
        <ProfTxt>Київ, Дистанційно</ProfTxt>
        {isBoxOpen && (
          <>
            <Overview>
              Привіт! Я вокаліст в групі ТАКА і я буду радий співпраці. Також
              граю на гітарі та піаніно.
            </Overview>
            <MediaList>
              <li>
                <Instagram />
              </li>
              <li>
                <Discord />
              </li>
              <li>
                <Telegram />
              </li>
              <li>
                <Spotify />
              </li>
            </MediaList>
          </>
        )}
      </ProfTextBox>
    </>
  );
};
