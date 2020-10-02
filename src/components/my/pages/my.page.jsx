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
        };
    }

    componentDidMount() {
        this.props.myInfo();
    }

    render() {
        const { alertMsg, alertType, loading, item, updating } = this.props;

        return (
            <div className='my-page'>
                <div id='netMsg'>
                    { alertMsg && <span className={`alert ${alertType}`}>{alertMsg}</span> }
                    { loading && <img src='/images/loading.gif' alt='loading' /> }
                </div>

                <h1>{this.state.user.user.username}</h1>

                <form>

                    <div className="form-group">
                        <label htmlFor="avatar">Avatar</label>
                        <input type="file" id="avatar" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">E-mail</label>
                        <input type="text" className="form-control" id="email" name='email' placeholder="E-mail" value={item?.email} />
                    </div>


                    <button type="submit" className="btn btn-primary">Submit</button>
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
