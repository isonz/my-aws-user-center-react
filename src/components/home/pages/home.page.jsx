import React from 'react';
import { Link } from 'react-router-dom';
import './home.page.css';
import {getLocalUser} from "../../../helpers/local";

export class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: getLocalUser(),
        };
    }

    render() {
        return (
            <div className='home-page'>
                <h3>HELLO，{this.state.user.user.username} </h3>
                <div className='home-content'>
                    <Link to='/main/users'>User Manager</Link>
                    <Link to='/main/my'>My Information</Link>
                    <Link to='/main/setting'>System Setting</Link>

                </div>
            </div>
        );
    }
}

