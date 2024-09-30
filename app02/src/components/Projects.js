import ProjectCard from "./ProjectCard";
import bugSmasher from "../assets/p-bugSmasher.png";
import feedbackPage from "../assets/assignment4.png";
import tacoPlace from "../assets/taco_place.png";

const Projects = () => {
    return (
        <div className="project-page">
            <h1>My Projects</h1>
            <div className="projects">
                <ProjectCard  pic={bugSmasher} title={"Bug Smasher"} description={"This is a bug smasher game using only javascript to simulate the bug and click on it to smash it."} link={"http://studentweb.cencol.ca/gsaaved2/"}/>
                <ProjectCard  pic={feedbackPage} title={"Program Feedback"} description={"This is a feedback page project that I did for students give their feedback about the program."} link={"https://github.com/GustavoSaav30/Assigment4"}/>
                <ProjectCard  pic={tacoPlace} title={"Taco Place"} description={"Taco place is a web page for a taco store business. This template can be used by other restaurants too."} link={"https://github.com/GustavoSaav30/Assigment-3"}/>
            </div>
        </div>
    );
};

export default Projects;