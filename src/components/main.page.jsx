import React from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import './main.page.css';

export class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loginUsername: '',
        };
    }

    render() {
        const { routes } = this.props.route;

        return (
            <div id='main' className='main'>
                <TopPage/>
                <LeftPage/>
                <div className='main-right'>
                    {renderRoutes(routes, { someProp: "" })}
                </div>
                <FooterPage/>
            </div>
        );
    }
}


function TopPage(props) {
    return <div>
        <Link to='/main'>MAIN</Link>
        <Link to='/main/home'>HOME</Link>
        Hello, {props.name}
    </div>;
}

function LeftPage(props) {
    return <div>Hello, {props.name}</div>;
}

function FooterPage(props) {
    return <div>Hello, {props.name}</div>;
}
