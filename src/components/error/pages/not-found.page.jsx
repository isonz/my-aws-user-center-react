import React from 'react';

export class NotFound extends React.Component {

    render() {
        return (
            <p>
                <h2>404</h2> <br/>
                <h5>Not Found Page : {this.props.location.pathname} </h5>
            </p>
        );
    }
}

//<h2>Not Found Page : {window.location.href} </h2>
