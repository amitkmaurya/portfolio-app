import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Portfolio() {
  return (
    <>
      {/* HERO / MAIN SECTION */}
      <section className="main">
        <div className="container">
          {/* NAVBAR */}
          <nav>
            <div className="nav-container">
              <div className="logo montserrat">
                <span className="orange montserrat">Amit</span> Kumar
              </div>

              <div className="links-container">
                <a href="#about-me">About</a> 
                <Link to="/contact">Contact Us</Link>
              </div>
            </div>
          </nav>

          {/* SOCIAL LINKS */}
          <div className="social-media-links-container">
            <div className="icons-cotainer">
              <a
                href="https://www.instagram.com/mr_amit21_8"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/insta.svg" alt="instagram" />
              </a>

             <a href="https://wa.me/919939522297" target="_blank" rel="noreferrer">
              <img className="whatsapp-icon" src="/images/WhatsApp.svg" alt="WhatsApp" />
            </a>


              <a
                href="https://www.linkedin.com/in/amit-kumar-4ab719226/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/linkedin.svg" alt="linkedin" />
              </a>
            </div>

            <div className="follow-me">Follow me</div>
          </div>

          {/* SHOWCASE */}
          <div className="showcase-container">
            <div className="showcase-image">
              <model-viewer
                className="model"
                alt="laptop"
                src="/images/laptop.glb"
                shadow-intensity="0"
                camera-controls
                touch-action="pan-y"
                camera-orbit="-45deg 65deg 9m"
                poster="/images/showcaseImage.svg"
                environment-image="/images/dancing_hall_2k.hdr"
                exposure="1.5"
                autoplay
                animation-name="animation1"
                auto-rotate
                disable-zoom
                disable-tap
              ></model-viewer>
            </div>

            <div className="showcase-text">
              <h1 className="montserrat">
                Hi, You found me!
                <br />
                I am{" "}
                <span className="orange montserrat">Web  Developer</span> &{" "}
                <span className="orange montserrat">Designer</span> from India
              </h1>

              <a href="/images/updated-resume.pdf" download="Amit Kumar Resume">
                <div className="download-resume">Resume</div>
              </a>
            </div>  
          </div>

          {/* MAIL BUTTON */}
          <div className="mail-button mail-button1">
            <a href="mailto:amitmaurya9939@gmail.com">
              <img src="/images/mail.svg" alt="mail" />
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT ME */}
      <section className="about-me" id="about-me">
        <div className="container">
          <div className="about-me-container">
            <div className="about-me-title">
              About <br /> Amit Kumar
            </div>

            <div className="about-me-flex-container">
              <div className="about-me-image">
                <div className="back-div"></div>
                <div className="black-image">
                  <img src="/images/profile3.jpeg" alt="black" />
                </div>
                <div className="main-image">
                  <img src="/images/profile1.jpeg" alt="Amit Kumar" />
                </div>
              </div>

              <div className="about-me-content">
                <div className="logo">
                  <img src="/images/logo.png" alt="logo" />
                </div>

                <div className="text">
                  With over 5 years of experience in the IT industry, I have worked across multiple
                  domains and collaborated with diverse clients to build reliable, scalable, and
                  user-focused digital products.
                  <br />
                  <br />
                  I specialize in Front-end and MERN stack development, working end-to-end from
                  designing intuitive user interfaces to developing robust backend systems using
                  React, Node.js, and MongoDB. My work spans various industries, allowing me to
                  adapt quickly, understand business needs, and deliver solutions that create
                  meaningful value.
                </div>
              </div>
            </div>

            <div className="mail-button mail-button2">
              <a href="mailto:amitmaurya9939@gmail.com">
                <img src="/images/mail.svg" alt="mail" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills">
        <div className="container">
          <div className="title-skills">Skills</div>

          <div className="skills-flex-container">
            {[
              ["html", "HTML"],
              ["css", "CSS"],
              ["bootstrap", "Bootstrap"],
              ["tailwind", "Tailwind"],
              ["js", "JavaScript"],
              ["jquery", "jQuery"],
              ["es6", "ES6"],
              ["react", "React.js"],
              ["Hugo", "HUGO"],
              ["nodejs", "Node.js"],
              ["Express", "Express.js"],
              ["Mongodb", "MongoDB"], 
               ["mysql", "SQL"],
               ["git", "Git"],
            ].map(([img, title]) => (
              <div className="box" key={title}>
                <div className="image">
                  <img src={`/images/${img}.png`} alt={title} />
                </div>
                <div className="title">{title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      {/* <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="testimonials-title">Testimonials</div>

          <div className="flex-container-outer">
            <div className="box">
              <div className="title">Creative</div>

              <div className="flex-container-testimonials">
                <div className="image-container">
                  <img
                    src="https://www.shape.com/thmb/XIVAqo_zKe3Cya2Ul27FQTRjTH8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Kiernan-Shipka-Workout-GettyImages-1160248128-0f7c555515ed4e5da5535d2ef51ed022.jpg"
                    alt="person"
                  />
                </div>

                <div className="content">
                  <div className="name">Kiernan Shipka</div>
                  <div className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vel quas debitis sequi nulla dolorem optio.
                  </div>
                </div>
              </div>
            </div>

            <div className="box box2">
              <div className="title">Creative</div>

              <div className="flex-container-testimonials">
                <div className="image-container">
                  <img
                    src="https://www.hollywoodreporter.com/wp-content/uploads/2020/05/elle_fanning_-_getty_-_h_2020_.jpg?w=1296"
                    alt="person"
                  />
                </div>

                <div className="content">
                  <div className="name">Elle Fanning</div>
                  <div className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vel quas debitis sequi nulla dolorem optio.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </>
  );
}

export default Portfolio;
