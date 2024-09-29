import ReactFullpage from '@fullpage/react-fullpage';
import './App.css';
import { FullpageProvider } from './app_context';
import HomeSection from './sections/home_section';
import PresentationSection from './sections/presentation_section';
import SpiritualitySection from './sections/spirituality_section';
import ArtSection from './sections/art_section';

const Fullpage = () => (
  <ReactFullpage
    credits={{ enabled: true }}
    scrollingSpeed={1000}
    render={({ state, fullpageApi }) => {
      return (
        <FullpageProvider value={{ fullpageApi, state }}>
          <ReactFullpage.Wrapper>
            <HomeSection />
            <PresentationSection />
            <SpiritualitySection />
            <ArtSection />
          </ReactFullpage.Wrapper>
        </FullpageProvider>
      );
    }}
  />
);

export default Fullpage;
