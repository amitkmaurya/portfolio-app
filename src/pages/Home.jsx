import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="about-me" id="about-me">
        <div className="container">
          <div className="about-me-container">
            <div className="about-me-title">
              Amit Kumar <br /> <span className="profile-title">Web Developer</span>
            </div>

            <div className="about-me-flex-container">
              <div className="about-me-image">
                <div className="back-div"></div>

                <div className="black-image">
                  <img src="/images/profile3.jpeg" alt="background" />
                </div>

                <div className="main-image">
                  <img src="/images/profile1.jpeg" alt="Amit Kumar" />
                </div>
              </div>

              <div className="about-me-content">
                <div className="logo">
                  <img src="/images/logo.png" alt="Amit logo" />
                </div>

                <div className="text">
                  I enjoy building digital products that go beyond code and create real value
                  for the community around me. My focus is on developing practical, accessible,
                  and user-friendly web applications that solve real-world problems.
                  <br />
                </div>
              </div>
            </div>

            <div className="mail-button mail-button2">
              <a href="mailto:amitmaurya9939@gmail.com">
                <img src="/images/mail.svg" alt="Mail Amit" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />

      <div className="portfolio-link">
        <Link to="/portfolio">My Portfolio</Link>
        <a href="/images/updated-resume.pdf" download="Amit Kumar Resume">
          <div className="download-resume">My Resume</div>
        </a>
      </div>
    </>
  );
}

export default Home;
