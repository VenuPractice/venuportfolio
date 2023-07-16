import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Lets talk about everything!</h3>
          <p className="contact__details">
            Don't like forms? Send me an email. 👋
          </p>
        </div>
        <form action="" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                id="name"
                type="text"
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>
            <div className="contact__form-div">
              <input
                id="email"
                type="email"
                className="contact__form-input"
                placeholder="Inesrt your email"
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input
              id="sub"
              type="text"
              className="contact__form-input"
              placeholder="Inesrt your subject"
            />
          </div>

          <div className="contact__form-div">
            <textarea
              name=""
              id="msg"
              cols="30"
              rows="10"
              className="contact__form-input contact__form-area"
              placeholder="Write your message"
            ></textarea>
          </div>
          <div>
            <button className="btn">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
