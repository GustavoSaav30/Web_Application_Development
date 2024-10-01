import ServiceCard from "./ServiceCard";
function Services() {
    return (
        <div className="service-page">
            <h1>My services</h1>
            <div className="services">
                <ServiceCard pic={"https://cdnwebkul.webkul.com/wp-content/uploads/2020/09/mobile-app-development-1.jpg"} description={"Mobile application development. Do your business need an app? Contact me for a quotation."}/>
                <ServiceCard pic={"https://elitecoaching.io/wp-content/uploads/2022/05/Front-End-development--1536x1024.webp"} description={"Front-end web development. Creation, updates and upgrades of web sites front-end."}/>
            </div>
        </div>
    );
};

export default Services;