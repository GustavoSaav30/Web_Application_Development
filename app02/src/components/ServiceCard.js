const ServiceCard = ({pic, description}) => {
    return (
        <div className="service-card">
            <img src={pic} />
            <p>{description}</p>
        </div>
    );
};

export default ServiceCard;