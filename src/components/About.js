import './About.css'
import me from '../assets/me.png'

function About() {
    return(
        <section id='about-sec'>
            <div class="grheading">About Me</div>
            <div className='about'>
                <div className="about-img">
                    <img src={me} alt="" />
                </div>
                <div className="about-txt">
                    <p>I'm <span className='highlight'>Alfaiz Sheikh</span>, a dedicated Frontend Developer with a strong interest in creating clean, responsive, and user-focused websites. I began my <span className='highlight'>web development</span> journey with HTML, CSS, and JavaScript, and gradually expanded my skills into modern tools and frameworks like <span className='highlight'>React.js</span>. I enjoy turning ideas into functional interfaces and constantly improving my design and coding style. As someone who loves learning and <span className='highlight'>experimenting</span> with new technologies, I aim to build meaningful digital experiences and grow steadily in the field of <span className='highlight'>web development</span>.</p>
                    <a class="cvbtn" href="/CV.pdf" download="My_CV.pdf">Download CV <i class="fa-solid fa-download"></i></a>
                </div>
            </div>
        </section>
    )
}

export default About;