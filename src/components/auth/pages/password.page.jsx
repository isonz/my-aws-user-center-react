import React from 'react';
import './password.page.css';
import { Link } from 'react-router-dom';


export class PasswordPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, email } = this.state;
        if (username && email) {
            //this.props.findPassword(username, email);
        }
    }

    render() {
        const { username, email, submitted } = this.state;

        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                         <h2>Find Your Password</h2>
                            <form name="form" onSubmit={this.handleSubmit}>
                                <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                                    <label htmlFor="username">Username</label>
                                    <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                                    {submitted && !username &&
                                    <div className="help-block">Username is required</div>
                                    }
                                </div>
                                <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" name="email" value={email} onChange={this.handleChange} />
                                    {submitted && !email &&
                                    <div className="help-block">Email is required</div>
                                    }
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary">Submit</button>

                                    <Link to="/auth" className="btn btn-link">Login</Link>
                                </div>

                            </form>

                    </div>
                </div>
            </div>
        );
    }
}