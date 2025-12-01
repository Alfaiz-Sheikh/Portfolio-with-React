import './About.css'

function About() {
    return(
        <section id='about-sec'>
            <div class="grheading">About Me</div>
            <div className='about'>
                <div className="about-img">
                    <img src="" alt="" />
                </div>
                <div className="about-txt">
                    <p>I'm Alfaiz Sheikh, a dedicated Frontend Developer with a strong interest in creating clean, responsive, and user-focused websites. I began my web development journey with HTML, CSS, and JavaScript, and gradually expanded my skills into modern tools and frameworks like React.js. I enjoy turning ideas into functional interfaces and constantly improving my design and coding style. As someone who loves learning and experimenting with new technologies, I aim to build meaningful digital experiences and grow steadily in the field of web development.</p>
                    <button class="cvbtn">Download CV <i class="fa-solid fa-download"></i></button>
                </div>
            </div>
        </section>
    )
}

export default About;