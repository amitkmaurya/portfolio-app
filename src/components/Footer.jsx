import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="footer" id="footer">
      <div className="container">
        <div className="footer-container">
          {/* LOGO */}
          <a href="#">
            <img
              className="logo-footer"
              src="/images/logo.png"
              alt="Amit Kumar"
            />
          </a>

          {/* SOCIAL MEDIA */}
          <div className="footer-social-media-links">
            <a
              href="https://www.instagram.com/mr_amit21_8"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/insta.svg" alt="Instagram" />
            </a>

             <a href="https://wa.me/919939522297" target="_blank" rel="noreferrer">
              <img src="/images/whatsapp1.svg" alt="WhatsApp" />
            </a>

            <a
              href="https://www.linkedin.com/in/amit-kumar-4ab719226/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/linkedin.svg" alt="LinkedIn" />
            </a>

            <a href="mailto:amitmaurya9939@gmail.com">
              <img src="/images/mail-footer.svg" alt="Email" />
            </a>
          </div>

          {/* FOOTER NAV */}
          <div className="footer-nav-links">
            <a href="#about-me">About</a>
            <Link to="/Contact">Contact</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
