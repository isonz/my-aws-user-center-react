import React from 'react';
import './my.page.css';
import {getLocalUser} from "../../../helpers/local";
import {MyActions} from "../my.action";
import {connect} from "react-redux";

class MyPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: getLocalUser(),
            email : '',
            avatar: '',
        };
        this.onBlurHandle = this.onBlurHandle.bind(this);
        this.onChangeHandle = this.onChangeHandle.bind(this);
    }

    componentDidMount() {
        this.props.myInfo();
    }

    onChangeHandle(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
        if('email' === name){
            this.props.item.email = value;
        }
        if('avatar' === name){
            this.props.item.avatar = value;
        }
        //console.log(this.props.item);
    }

    onBlurHandle(e) {
        const { name, value } = e.target;
        // console.log(name, value);
        this.setState({ [name]: value });
        this.props.myUpdate({[name]: value });
    }

    render() {
        const { alertMsg, alertType, loading, item, updating } = this.props;

        return (
            <div className='my-page'>
                <div id='netMsg'>
                    { alertMsg && <span className={`alert ${alertType}`}>{alertMsg}</span> }
                    { (updating || loading) && <img src='/images/loading.gif' alt='loading' /> }
                </div>

                <h1>{this.state.user.user.username}</h1>
                <p>ID: {this.state.user.user.id}</p>

                <form>

                    <div className="form-group ant-avatar-group">
                        <img id='avatar_show' src={item?.avatar || '/images/avatar_default.jpg'} alt='avatar' />
                        <input type="file" id="avatar" name='avatar' />
                        <p>Click me to modify</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">E-mail</label>
                        <input type="text" className="form-control" id="email" name='email' placeholder="E-mail" value={item?.email || ''} onBlur={this.onBlurHandle} onChange={this.onChangeHandle} />
                    </div>

                </form>

            </div>
        );
    }
}

function mapState(state) {
    const { alertMsg, alertType } = state.alertReducer;
    const { loading, item, updating} = state.myReducer;
    return { alertMsg, alertType, loading, item, updating };
}

const actionCreators = {
    myInfo: MyActions.myInfo,
    myUpdate: MyActions.myUpdate,
};

const connected = connect(mapState, actionCreators)(MyPage);
export { connected as MyPage };
