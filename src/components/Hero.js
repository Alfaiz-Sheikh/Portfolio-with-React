import "./Hero.css"
import TypingText from "../components/TypingText";
import me from "../assets/me.png"

const Hero = () => {
    return (
        <section id="hero">
            <div className="leftsec">
                <p>Hi I am</p>
                <p className="leftsec-name">Alfaiz Sheikh</p>
                <TypingText />
                <p>A frontend developer skilled in HTML, CSS, and JavaScript. I specialize in crafting clean, responsive websites that deliver great user experiences.</p>
                <div class="leftsecbtn">
                    <a class="cvbtn" href="/CV.pdf" download="My_CV.pdf">Download CV <i class="fa-solid fa-download"></i></a>
                    <div>
                        <a href="https://github.com/Alfaiz-Sheikh" target="_blank" className="social-btn"><i class="fa-brands fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/alfaiz-sheikh-a2065a282/" target="_blank" className="social-btn"><i class="fa-brands fa-linkedin-in"></i></a>
                        <a href="https://www.facebook.com/alfai.sheikh" target="_blank" className="social-btn"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/alfaiz_h_sheikh/" target="_blank" className="social-btn"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div class="rightsec">
                <div class="img">
                        <img src={me} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Hero;