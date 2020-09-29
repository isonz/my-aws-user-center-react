import React from 'react';
import './my.page.css';
import {getLocalUser} from "../../../helpers/local";

export class MyPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: getLocalUser(),
        };
    }

    render() {
        return (
            <div className='user-page'>
                <h3>HELLO，My name is {this.state.user.user.username} </h3>

            </div>
        );
    }
}

