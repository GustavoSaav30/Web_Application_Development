const ProjectCard = ({pic, title, description, link}) => {
return (
    <div>
        <img src={pic}/>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link}>Repository</a>
    </div>
);
};

export default ProjectCard;