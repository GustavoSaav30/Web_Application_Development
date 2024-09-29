import profile from "../../src/assets/profile.jpg"
import resume from "../assets/resume.pdf"
const About = () => {
    return(
    <div className="about">
        <div className="container-flex">
            <p>
                My name is Gustav Saavedra
                I am 25 years old
                I am from mexico
                My hobies are playing video games and watching movies
            </p>
            <img src={profile} />
        </div>
        <a
            target="_blank"
            href={resume}
            download="GustavoSaavedraResume.pdf"
        >
            <i className="fa-solid fa-address-card" aria-hidden="true"></i>Resume
        </a>
    </div>
    );
};

export default About;