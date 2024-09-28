import ReactFullpage from '@fullpage/react-fullpage';
import './App.css';
import { FullpageProvider } from './app_context';
import PresentationSection from './sections/presentation_section';
import OverviewSection from './sections/overview_section';
import SpiritualitySection from './sections/spirituality_section';

const Fullpage = () => (
  <ReactFullpage
    credits={{ enabled: false, label: '' }}
    scrollingSpeed={1000}
    render={({ state, fullpageApi }) => {
      return (
        <FullpageProvider value={{ fullpageApi, state }}>
          <ReactFullpage.Wrapper>
            <PresentationSection />
            <OverviewSection />
            <SpiritualitySection />
          </ReactFullpage.Wrapper>
        </FullpageProvider>
      );
    }}
  />
);

export default Fullpage;
