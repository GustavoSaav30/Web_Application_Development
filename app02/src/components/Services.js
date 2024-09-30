import ServiceCard from "./ServiceCard";
import pic from "../assets/p-bugSmasher.png"
function Services() {
    return (
        <div className="service-page">
            <h1>My services</h1>
            <div className="services">
                <ServiceCard pic={pic} description={"Web development services developing web sites and application"}/>
            </div>
        </div>
    );
};

export default Services;