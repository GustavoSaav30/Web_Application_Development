import ServiceCard from "./ServiceCard";
import frontEnd from "../assets/front-end.webp"
import mobileApp from "../assets/mobile-app.jpg"
function Services() {
    return (
        <div className="service-page">
            <h1>My services</h1>
            <div className="services">
                <ServiceCard pic={mobileApp} description={"Mobile application development. Do your business need an app? Contact me for a quotation."}/>
                <ServiceCard pic={frontEnd} description={"Front-end web development. Creation, updates and upgrades of web sites front-end."}/>
            </div>
        </div>
    );
};

export default Services;