const ProjectCard = ({pic, title, description, link}) => {
return (
    <div className="project-card">
        <h3>{title}</h3>
        <img src={pic}/>
        <p>{description}</p>
        <a href={link} target="_blank">Repository</a>
    </div>
);
};

export default ProjectCard;