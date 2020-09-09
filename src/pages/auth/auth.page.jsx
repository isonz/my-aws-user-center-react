import React from 'react';
import './auth.page.css';
import {Functions} from "../../common/functions";

export class AuthPage extends React.Component {

    login_username = '';
    login_password = '';

    reg_username = '';
    reg_password = '';
    reg_re_password = '';
    reg_email = '';


    constructor(props) {
        super(props);
        this.state = {
            loginUsername: '',
            loginPassword: '',
            loginCheck: true,
            loginSubmitted: false,
            loginProcess: false,

            regUsername: '',
            regPassword: '',
            regRePassword: '',
            regEmail: '',
            regSubmitted: false,
            regProcess: false,


            defaultTabChecked: true,
        };
        this.loginHandleChange = this.loginHandleChange.bind(this);
        this.regHandleChange = this.regHandleChange.bind(this);
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

    loginHandleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
        if('loginUsername' === name) this.login_username = value;
        if('loginPassword' === name) this.login_password = value;
        if(this.login_username.length > 3 && this.login_password.length > 5){
            this.setState({ loginSubmitted: false });
        }else{
            this.setState({ loginSubmitted: true });
        }
    }

    regHandleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
        if('regUsername' === name) this.reg_username = value;
        if('regPassword' === name) this.reg_password = value;
        if('regRePassword' === name) this.reg_re_password = value;
        if('regEmail' === name) this.reg_email = value;
        if(this.reg_username.length > 3 && this.reg_password.length > 5 && this.reg_password === this.reg_re_password && Functions.checkEmail(this.reg_email)){
            this.setState({ regSubmitted: false });
        }else{
            this.setState({ regSubmitted: true });
        }
    }

    handleLoginSubmit(e) {
        e.preventDefault();

        this.setState({ loginSubmitted: true });
        const { loginUsername, loginPassword } = this.state;
        if (loginUsername && loginPassword) {
            this.setState({ loginProcess: true });
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
        const { loginUsername, loginPassword, loginSubmitted, loginProcess} = this.state;
        const { regUsername, regPassword, regRePassword, regEmail, regSubmitted, regProcess} = this.state;
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
                                                <div className={'group' + (loginSubmitted && !loginUsername ? ' has-error' : '')}>
                                                    <label htmlFor="loginUsername" className="label">Username</label>
                                                    <input id="loginUsername" name="loginUsername" type="text" className="input" autoComplete="off" placeholder="Enter your username" value={loginUsername} onChange={this.loginHandleChange} />
                                                    {loginSubmitted && !loginUsername && <div className="help-block">Username is required</div> }
                                                    {loginUsername.length > 0 && loginUsername.length < 4 && <div className="help-block">Minimum length is 4 characters</div> }
                                                </div>
                                                <div className="group">
                                                    <label htmlFor="loginPassword" className="label">Password</label>
                                                    <input id="loginPassword" name="loginPassword" type="password" className="input" autoComplete="off" data-type="password" placeholder="Enter your password"  value={loginPassword} onChange={this.loginHandleChange} />
                                                    {loginSubmitted && !loginPassword && <div className="help-block">Password is required</div> }
                                                    {loginPassword.length > 0 && loginPassword.length < 6 && <div className="help-block">Minimum length is 6 characters</div> }
                                                </div>
                                                <div className="group">
                                                    <input id="loginCheck" type="checkbox" className="check" checked  onChange={this.loginHandleChange} />
                                                    <label htmlFor="loginCheck"><span className="icon"> </span> Keep me Signed in</label>
                                                </div>
                                                <div className="group">
                                                    <button type="submit" className={"button" + (loginSubmitted ? ' disable' : '')} value="" onClick={this.handleLoginSubmit} disabled={loginSubmitted}>
                                                        Sign In
                                                        { loginProcess && <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" /> }
                                                    </button>
                                                </div>
                                                <div className="hr"> </div>
                                                <div className="foot"><a href={"/auth/password"}>Forgot Password?</a></div>
                                            </div>
                                        </form>

                                        <div className="sign-up-form">
                                            <div className={'group' + (regSubmitted && !regUsername ? ' has-error' : '')}>
                                                <label htmlFor="regUsername" className="label">Username</label>
                                                <input id="regUsername" name="regUsername" type="text" className="input" autoComplete="off" placeholder="Create your username" value={regUsername} onChange={this.regHandleChange} />
                                                {regSubmitted && !regUsername && <div className="help-block">Username is required</div> }
                                                {regUsername.length > 0 && regUsername.length < 4 && <div className="help-block">Minimum length is 4 characters</div> }
                                            </div>
                                            <div className="group">
                                                <label htmlFor="regPassword" className="label">Password</label>
                                                <input id="regPassword" name="regPassword" type="password" className="input" autoComplete="off" data-type="password" placeholder="Create your password"  value={regPassword} onChange={this.regHandleChange} />
                                                {regSubmitted && !regPassword && <div className="help-block">Password is required</div> }
                                                {regPassword.length > 0 && regPassword.length < 6 && <div className="help-block">Minimum length is 6 characters</div> }
                                            </div>
                                            <div className="group">
                                                <label htmlFor="regRePassword" className="label">Repeat Password</label>
                                                <input id="regRePassword" name="regRePassword" type="password" className="input" autoComplete="off" data-type="password" placeholder="Repeat your password"  value={regRePassword} onChange={this.regHandleChange} />
                                                {regRePassword !== regPassword && <div className="help-block">Repeated password is not equal to password</div> }
                                            </div>
                                            <div className="group">
                                                <label htmlFor="regEmail" className="label">Email Address</label>
                                                <input id="regEmail" name="regEmail" type="text" className="input" autoComplete="off" placeholder="Enter your email address"  value={regEmail} onChange={this.regHandleChange}/>
                                                {regSubmitted && !regEmail && <div className="help-block">Email is required</div> }
                                                {regEmail.length > 0 && !Functions.checkEmail(regEmail) && <div className="help-block">Please fill in the correct Email</div> }
                                            </div>
                                            <div className="group">
                                                <button type="submit" className={"reg button" + (regSubmitted ? ' disable' : '')} value="" onClick={this.handleRegSubmit} disabled={regSubmitted}>
                                                    Sign Up
                                                    { regProcess && <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" /> }
                                                </button>
                                            </div>
                                            <div className="hr reg"> </div>
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
