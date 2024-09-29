import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container">
            <h1>Welcome to My Portfolio</h1>
            <p>
                Hi! I'm Gustavo Saavedra, a passionate front-end developer.
            </p>
            <h2>My Mission</h2>
            <p>
                My goal is to delivery the best user experience
                with a focus on simplicity and elegance.
            </p>
            <div className="button-container">
                <Link to="/about">
                    <button className="button">About Me</button>
                </Link>
                <Link to="/projects">
                    <button className="button">My Projects</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
