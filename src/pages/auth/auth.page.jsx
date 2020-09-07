import React from 'react';
import './auth.page.css';
import {Functions} from "../../common/functions";

export class AuthPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loginUsername: '',
            loginPassword: '',
            loginCheck: true,
            loginSubmitted: false,

            regUsername: '',
            regPassword: '',
            regRePassword: '',
            regEmail: '',
            regSubmitted: false,

            defaultTabChecked: true,
        };
        this.handleChange = this.handleChange.bind(this);
        this.changeTab = this.changeTab.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleRegSubmit = this.handleRegSubmit.bind(this);
    }

    componentDidMount() {
        this.setState({

        });
    }

    changeTab(){
        this.setState({
            defaultTabChecked : !this.state.defaultTabChecked,
        });
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleLoginSubmit(e) {
        e.preventDefault();

        this.setState({ loginSubmitted: true });
        const { loginUsername, loginPassword } = this.state;
        if (loginUsername && loginPassword) {
            this.props.login(loginUsername, loginPassword);
        }
    }

    handleRegSubmit(e) {
        e.preventDefault();

        this.setState({ regSubmitted: true });
        const { regUsername, regPassword, regRePassword, regEmail} = this.state;
        if (regUsername && regPassword && regRePassword && Functions.checkEmail(regEmail)) {
            this.props.signUp(regUsername, regPassword, regRePassword, regEmail);
        }
    }

    render() {
        const { loginUsername, loginSubmitted} = this.state;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto p-0">
                        <div className="card">
                            <div className="login-box">
                                <div className="login-snip">
                                    <input id="tab-1" type="radio" name="tab" className="sign-in" checked={this.state.defaultTabChecked}  onChange={this.changeTab} />
                                    <label htmlFor="tab-1" className="tab">Login</label>
                                    <input id="tab-2" type="radio" name="tab" className="sign-up" checked={!this.state.defaultTabChecked} onChange={this.changeTab} />
                                    <label htmlFor="tab-2" className="tab tab-sign-up">Sign Up</label>

                                    <div className="login-space">

                                        <form name="form" onSubmit={this.handleLoginSubmit}>
                                            <div className="login">
                                                <div className={'form-group' + (loginSubmitted && !loginUsername ? ' has-error' : '')}>
                                                    <label htmlFor="loginUsername" className="label">Username</label>
                                                    <input id="loginUsername" name="loginUsername" type="text" className="form-control" placeholder="Enter your username" value={loginUsername} onChange={this.handleChange} />
                                                    {loginSubmitted && !loginUsername && <div className="help-block">Username is required</div> }
                                                </div>
                                                <div className="group"><label htmlFor="loginPassword" className="label">Password</label>
                                                    <input id="loginPassword" type="password" className="input" data-type="password" placeholder="Enter your password" />
                                                </div>
                                                <div className="group">
                                                    <input id="loginCheck" type="checkbox" className="check" checked  onChange={this.handleChange} />
                                                    <label htmlFor="loginCheck"><span className="icon"> </span> Keep me Signed in</label>
                                                </div>
                                                <div className="group">
                                                    <input type="submit" className="button" value="Sign In" onClick={this.handleLoginSubmit} />
                                                    { loginSubmitted && <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" /> }
                                                </div>
                                                <div className="hr"> </div>
                                                <div className="foot"><a href={"/auth/password"}>Forgot Password?</a></div>
                                            </div>
                                        </form>

                                        <div className="sign-up-form">
                                            <div className="group">
                                                <label htmlFor="regUsername" className="label">Username</label>
                                                <input id="regUsername" type="text" className="input" placeholder="Create your Username" />
                                            </div>
                                            <div className="group">
                                                <label htmlFor="regPassword" className="label">Password</label>
                                                <input id="regPassword" type="password" className="input" data-type="password" placeholder="Create your password" />
                                            </div>
                                            <div className="group">
                                                <label htmlFor="regRePassword" className="label">Repeat Password</label>
                                                <input id="regRePassword" type="password" className="input" data-type="password" placeholder="Repeat your password" />
                                            </div>
                                            <div className="group">
                                                <label htmlFor="regEmail" className="label">Email Address</label>
                                                <input id="regEmail" type="text" className="input" placeholder="Enter your email address" />
                                            </div>
                                            <div className="group">
                                                <input type="submit" className="button" value="Sign Up" />
                                            </div>
                                            <div className="hr"> </div>
                                            <div className="foot"><label htmlFor="tab-1">Already Member?</label></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
