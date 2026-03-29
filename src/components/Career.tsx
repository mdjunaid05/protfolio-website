import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My <span>Education</span>
          <br /> & Background
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SSLC</h4>
                <h5>Anitha Higher Primary School, Malavalli Taluk, Mandya Dist</h5>
              </div>
              <h3>2020 – 2021</h3>
            </div>
            <p>Percentage: 81.6%</p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma in Computer Science & Engineering</h4>
                <h5>BET Polytechnic Bharthinagar, Mandya Dist</h5>
              </div>
              <h3>2021 – 2024</h3>
            </div>
            <p>Percentage: 86.5%</p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BE in Computer Science & Engineering (Data Science)</h4>
                <h5>ATME College of Engineering, Mysore</h5>
              </div>
              <h3>2024 – 2026</h3>
            </div>
            <p>CGPA: 6.6 (Pursuing)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
