import React from 'react';
import { Link } from 'react-router';

const Home = (props) => {
    return (
        <div>
            <h5>Welcome</h5>
            <p>
                This is a simple App to demonstrate the usage of GraphQL
                with ReactJs and authentication with Passport.js.
            </p>

            Stack:
            <ul className="browser-default">
                <li>NodeJs</li>
                <li>ReactJs</li>
                <li>GraphQL</li>
                <li>Passport.js</li>
            </ul>
    
            <p>
                You can <Link to="/signup">Signup</Link> or <Link to="/login">Login</Link> by clicking on these links
                or at the header.
            </p>
        </div>
    );
}

export default Home;
