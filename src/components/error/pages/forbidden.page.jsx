import React from 'react';

export function ForbiddenPage(props) {
    return  <div>
            <h2>403</h2><br/>
            <h5>Forbidden! <br/><br/>Url: {props.location.pathname} </h5>
        </div>;
}

//<h2>Not Found Page : {window.location.href} </h2>
