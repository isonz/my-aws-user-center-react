import React from 'react';
import { Link } from 'react-router-dom';


export class HomePage extends React.Component {

    render() {
        return (
            <div>
                <h1>Hi HOME!</h1>
                <Link to="/">Test</Link><br/>
                <Link to="/login">Logout</Link>
            </div>
        );
    }
}

