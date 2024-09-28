import { useState, createContext, useContext } from 'react';
import ReactFullpage, { fullpageApi } from '@fullpage/react-fullpage';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { FullpageProvider } from './app_context';
import PresentationSection from './sections/presentation_section';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React..</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    credits={{ enabled: false, label: '' }}
    scrollingSpeed={1000}
    render={({ state, fullpageApi }) => {
      return (
        <FullpageProvider value={{ fullpageApi }}>
          <ReactFullpage.Wrapper>
            <PresentationSection />
            <div className="section">
              <p>Section 2</p>
            </div>
          </ReactFullpage.Wrapper>
        </FullpageProvider>
      );
    }}
  />
);

export default Fullpage;
