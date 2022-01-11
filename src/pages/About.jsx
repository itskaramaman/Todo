import { Link } from 'react-router-dom';

function About() {
    return (
        <div className="card">
            <p>About</p>
            <Link to="/">Back to Home</Link>
        </div>
    )
}

export default About;
