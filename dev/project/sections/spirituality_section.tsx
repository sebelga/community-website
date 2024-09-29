const SpiritualitySection = () => {
  return (
    <div className="section spirituality">
      <div className="sectionContent sectionContent--inverse">
        <div className="flexGroup">
          <div className="flexItem contentCol">
            <div className="wrapperContent">
              <h1>Spirituality</h1>
              <p>
                We realize that the highest purpose of life is to find our true Self. We dream to
                have a place that we call home where we are supported and elevated in our sadhana.
                The importance of a sangha (community) is well known when we are on the spiritual
                path.
              </p>

              <p>
                We want to have rituals like morning and evening meditations, satsangs, kirtans,
                sharing circles, yoga sessions, ceremonies. We also want to offer workshops,
                retreats, and courses on various spiritual topics.
              </p>

              <p>
                We also find it important to dedicate moments of silence to go deeper within. We
                envision moments of silence where the community takes a few days (around 3) regulary
                to reconnect and be in touch with our Divine nature.
              </p>
            </div>
          </div>

          <div className="flexItem imgCol">
            <img data-src="/spirituality.jpg" alt="Spirituality" className="image-section" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpiritualitySection;
