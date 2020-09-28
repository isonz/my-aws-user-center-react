import React from 'react';
import { Link } from 'react-router-dom';
import './home.page.css';

export class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loginUsername: '',
        };
    }

    render() {
        return (
            <div>
                <h1>Hi HOME!</h1>
                <Link to="/">Test</Link><br/>
                <Link to="/auth">Logout</Link>
            </div>
        );
    }
}

