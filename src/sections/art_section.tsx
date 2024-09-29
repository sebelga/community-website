const ArtSection = () => {
  return (
    <div className="section art">
      <div className="slide">
        <div className="sectionContent">
          <div className="flexGroup">
            <div className="flexItem imgCol">
              <img data-src="/art-1.jpg" alt="Art" className="image-section" />
            </div>
            <div className="flexItem">
              <div className="wrapperContent">
                <h1>Art</h1>
                <p>[Text about Art].</p>

                <p>Bla bla bla</p>

                <p>Bla bla bla</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slide">
        <div className="sectionContent">
          <div className="flexGroup">
            <div className="flexItem imgCol">
              <img data-src="/art-1.jpg" alt="Art" className="image-section" />
            </div>
            <div className="flexItem">
              <div className="wrapperContent">
                <h1>Art</h1>
                <p>[Text about Art].</p>

                <p>Bla bla bla</p>

                <p>Bla bla bla</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtSection;
