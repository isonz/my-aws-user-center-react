import React from 'react';
import './setting.page.css';

export class SettingPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {},
        };
    }

    render() {
        return (
            <div className='setting-page'>
                <h3>This is the setting page.</h3>

            </div>
        );
    }
}

