import "./Contact.css"

function Contact() {
    return(
        <section id="contact">
            <div className="contact-sec">
                <form action="" className="contact-form">
                    <p className="grheading">Let's work together!</p>
                    <p className="headingtext">I design and code beautifully simple things and i love what i do. Just simple like that!</p>
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" /><br/>
                    <input type="email" placeholder="Email Address"/>
                    <input type="tel" placeholder="Phone Number"/><br/>
                    <select name="post">
                        <option value="">-- Please Choose an option --</option>
                        <option value="frontend">Front-End Development</option>
                        <option value="ui/ux">UI/UX Implementation</option>
                        <option value="responsive">Responsive Web Design</option>
                        <option value="web-optimization">Website Optimization</option>
                    </select><br/>
                    <input type="textarea" placeholder="Message"></input>
                    <button className="submit-btn cvbtn">Send Message</button>
                </form>
                <div className="contact-info">
                    <div className="contact-tag">
                        <div className="contact-icon">
                            <i class="fa-solid fa-phone"></i>
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
                            <i class="fa-regular fa-envelope"></i>
                        </div>
                        <div className="contact-txt">
                            <p className="contact-heading">Email</p>
                            <p className="contact-desc">
                                <a href="mailto:alfaizhsheikh1054@gmail.com">alfaizhsheikh1054@gmail.com</a>
                            </p>
                        </div>
                    </div>
                    <div className="contact-tag">
                        <div className="contact-icon">
                            <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <div className="contact-txt">
                            <p className="contact-heading">Address</p>
                            <p className="contact-desc">46, Tanzeem Nagar, Khajrana, Indore, M.P.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;