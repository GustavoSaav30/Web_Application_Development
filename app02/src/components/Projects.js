import ProjectCard from "./ProjectCard";
import bugSmasher from "../assets/p-bugSmasher.png"

const Projects = () => {
    return (
        <div className="">
            <div className="projects">
                <ProjectCard  pic={bugSmasher} title={"Bug Smasher"} description={"This is a bug smasher game using only javascript to simulate the bug and click on it to smash it."} link={"somelink"}/>
                <ProjectCard  pic={bugSmasher} title={"Bug Smasher"} description={"Some description here"} link={"somelink"}/>
                <ProjectCard  pic={bugSmasher} title={"Bug Smasher"} description={"Some description here"} link={"somelink"}/>
            </div>
        </div>
    );
};

export default Projects;