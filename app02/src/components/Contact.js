import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            firstName,
            lastName,
            email,
            phone,
            message,
        });

        navigate("/");
    };

    return (
        <div className="contact-page">
            <h1>Contact Me</h1>

            <div className="contact-info">
                <h2>My Contact Information</h2>
                <p>Email: gsaaved2@my.centennialcollege.ca</p>
                <p>Phone: +1 437 437 2662</p>
                <p>Location: Toronto</p>
            </div>

            <div className="contact-form">
                <h2>Send me a Message</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            id="firstName"
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                            autoComplete="given-name"
                        />
                    </div>

                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                            autoComplete="family-name"
                        />
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            autoComplete="email"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone">Phone</label>
                        <input
                            id="phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            autoComplete="tel"
                        />
                    </div>

                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            autoComplete="off"
                        />
                    </div>

                    <button type="submit" className="button">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;