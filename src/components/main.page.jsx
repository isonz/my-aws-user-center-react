import React from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import './main.page.css';
import {getLocalUser} from "../helpers/local";

export class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: getLocalUser(),
        };
    }

    render() {
        const { routes } = this.props.route;

        return (
            <div id='main' className='main'>
                <TopPage auth={this.state.user}/>
                <LeftPage/>
                <div id='main-right'>
                    {renderRoutes(routes, { someProp: "" })}
                </div>
                <FooterPage/>
            </div>
        );
    }
}


function TopPage(props) {
    return <div id='main-top'>
        <div className='left'>

        </div>
        <div className='right'>
            <Link to='/main/my'>{props.auth.user.username}</Link>
            <Link to='/auth'>Logout</Link>
        </div>

    </div>;
}

function LeftPage(props) {
    return <div id='main-left'>
        <div className='content'>
            <h4><Link to='/'>AWS USER CENTER</Link></h4>
            <ul>
                <li><Link to='/main/users'>USERS</Link></li>
            </ul>
            <ul className='my'>
                <li><Link to='/main/my'>MY</Link></li>
                <li><Link to='/main/setting'>SETTING</Link></li>
            </ul>
        </div>
    </div>;
}

function FooterPage(props) {
    return <div  id='main-footer'>Copyright © ONION REPUBLIC All Rights Reserved.</div>;
}
