import { useFullpage } from '../app_context';

const HomeSection = () => {
  const { fullpageApi } = useFullpage();

  return (
    <div className="section home">
      <div className="sectionContent">
        <h1>Ouispare</h1>
        <h2>Whispers & Arts</h2>
        <p>An intentional spiritual community for Truth Seekers</p>
        <button onClick={() => fullpageApi.moveSectionDown()}>Discover</button>
      </div>
    </div>
  );
};

export default HomeSection;
