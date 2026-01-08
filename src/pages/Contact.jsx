function Contact() {
  return (
    <div className="form-container-main">
      <div className="form-container">
        {/* LEFT SIDE IMAGE / MODEL */}
        <div className="form-image">
          <h1 className="montserrat">Get in touch</h1>

          <model-viewer
            className="model"
            alt="gmail"
            src="/images/gmail.glb"
            shadow-intensity="1"
            camera-controls
            touch-action="pan-y"
            environment-image="/images/dancing_hall_2k.hdr"
            exposure="1.5"
            disable-zoom
            disable-tap
            camera-target="-0.01m 0.2m 0m"
            camera-orbit="-45deg 70deg 9m"
            autoplay
          ></model-viewer>
        </div>

        {/* CONTACT FORM */}
        <form className="form">
          <input type="text" name="name" placeholder="Name" autoFocus />

          <input type="email" name="email" placeholder="Email" />

          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Say Hello"
          ></textarea>

          <div className="button-container">
            <input type="submit" className="send-button" value="Send" />

            <div className="reset-button-container">
              <input type="reset" className="reset-button" value="Reset" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
