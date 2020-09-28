import React from 'react';

export class NotFound extends React.Component {

    render() {
        return (
            <div>
                <h2>404</h2> <br/>
                <h5>Not Found Page : {this.props.location.pathname} </h5>
            </div>
        );
    }
}

//<h2>Not Found Page : {window.location.href} </h2>
