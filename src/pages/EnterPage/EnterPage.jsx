import { EnterBox } from '../../components/EnterBox/EnterBox';
import { WelcomeText } from 'components/WelcomeText/WelcomeText';
import { ContentWraper } from './EnterPage.styled';

export const EnterPage = () => {
  return (
    <ContentWraper>
      <EnterBox />
      <WelcomeText />
    </ContentWraper>
  );
};
