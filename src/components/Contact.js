import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uzeopgp",
        "template_dcsciro",
        form.current,
        "ZXflnclVHsGqMWeAF"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          alert("Failed to send message");
        }
      );
  };

  return (
    <section id="contact">
      <div className="contact-sec">
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <p className="grheading">Let's work together!</p>
          <p className="headingtext">
            I design and code beautifully simple things and I love what I do.
            Just simple like that!
          </p>

          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
          />

          <select name="service" required>
            <option value="">-- Please Choose an option --</option>
            <option value="Front-End Development">Front-End Development</option>
            <option value="UI/UX Implementation">UI/UX Implementation</option>
            <option value="Responsive Web Design">Responsive Web Design</option>
            <option value="Website Optimization">Website Optimization</option>
          </select>

          <textarea
            name="message"
            placeholder="Message"
            required
          ></textarea>

          <button type="submit" className="submit-btn cvbtn">
            Send Message
          </button>
        </form>

        <div className="contact-info">
          <div className="contact-tag">
            <div className="contact-icon">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className="contact-txt">
              <p className="contact-heading">Phone</p>
              <p className="contact-desc">
                <a href="tel:+919171952860">+91 91719 52860</a>
              </p>
            </div>
          </div>

          <div className="contact-tag">
            <div className="contact-icon">
              <i className="fa-regular fa-envelope"></i>
            </div>
            <div className="contact-txt">
              <p className="contact-heading">Email</p>
              <p className="contact-desc">
                <a href="mailto:alfaizhsheikh1054@gmail.com">
                  alfaizhsheikh1054@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="contact-tag">
            <div className="contact-icon">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className="contact-txt">
              <p className="contact-heading">Address</p>
              <p className="contact-desc">
                46, Tanzeem Nagar, Khajrana, Indore, M.P.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;