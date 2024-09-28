const OverviewSection = () => {
  return (
    <div className="section overview">
      <div className="sectionContent">
        <div className="flexGroup">
          <div className="flexItem imgCol">
            <img
              src="/overview.jpg"
              alt="Community"
              className="image-section"
            />
          </div>
          <div className="flexItem">
            <div className="wrapperContent">
              <h1>Presentation</h1>
              <p>
                We have the dream to launch a spiritual community for <strong>Truth Seekers</strong>
                . A place for those who are on a journey to discover their higher Self. A place to
                reconnect with one self with the help of a strong community.
              </p>

              <p>
                We also cherish <strong>Art</strong> in all its forms and we believe that it is a
                powerful tool for personal and collective transformation.
              </p>

              <p>We want to build it in the most sustainable and eco-friendly way possible.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
