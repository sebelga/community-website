import { useFullpage } from '../app_context';

const PresentationSection = () => {
  const { fullpageApi } = useFullpage();

  return (
    <div className="section">
      <h1>Ouispare</h1>
      <h2>Whispers & Arts</h2>
      <p>An intentional spiritual community for Truth Seekers</p>
      <button onClick={() => fullpageApi.moveSectionDown()}>Discover</button>
    </div>
  );
};

export default PresentationSection;
