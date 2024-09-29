import logo from "../../src/assets/logo.png"
const About = () => {
    return(
    <div className="about">
        <div className="container-flex">
            <ul>
                <li>My name is Gustav Saavedra</li>
                <li>I am 25 years old </li>
                <li>I am from mexico</li>
                <li>My hobies are playing video games and watching movies</li>
            </ul>
            <img src={logo} />
        </div>
        <a
            target="_blank"
            href="../assets/resume.pdf"
            download="GustavoSaavedraResume.pdf"
        >
            <i className="fa-solid fa-file-pdf-o"></i>
        </a>
    </div>
    );
};

export default About;