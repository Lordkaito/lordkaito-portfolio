const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-me-message">
        <h3>Let's work together!</h3>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
      <div className="contact-form-container">
        <form className="contact-form">
          <div className="contact-form-name">
            <input type="text" id="name" placeholder="Name" />
          </div>
          <div className="contact-form-email">
            <input type="email" id="email" placeholder="email" />
          </div>
          <div className="contact-form-message">
            <textarea id="message" rows="5" placeholder="Message" />
          </div>
          <div className="contact-form-button">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
