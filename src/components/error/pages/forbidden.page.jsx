import React from 'react';

export class ForbiddenPage extends React.Component {

    render() {
        return (
            <div>
                <h2>403</h2><br/>
                <h5>Forbidden! <br/><br/>Url: {this.props.location.pathname} </h5>
            </div>
        );
    }
}

//<h2>Not Found Page : {window.location.href} </h2>
