import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import './user.page.css';
import {connect} from "react-redux";
import {UserActions} from "../user.action";

class UserPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: {},
            users: [],
        };
    }

    componentDidMount() {
        this.props.getAll('', 2);
        this.setState({
        });
    }

    render() {
        const { loading, alertMsg, alertType, items} = this.props;
        return (
            <div className='user-page'>
                <div id='netMsg'>
                    { alertMsg && <span className={`alert ${alertType}`}>{alertMsg}</span> }
                    { loading && <img src='/images/loading.gif' alt='loading' /> }
                </div>

                <table className="table table-hover">
                    <caption>USERS LIST</caption>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>USERNAME</th>
                        <th>EMAIL</th>
                        <th>CREATED AT</th>
                        <th width='100'>DELETE</th>
                    </tr>
                    </thead>
                    <tbody>
                    {'undefined' !== typeof items && 'undefined' !== typeof items.Items && items.Items && items.Items.map( (user, index) =>
                    <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{moment(user.createdAt).format("yyyy-MM-DD: HH:mm:ss")}</td>
                        <td className='delete'><Link to='/main/users/delete/:id'>DELETE</Link></td>
                    </tr>
                    )}
                    </tbody>
                </table>

                <ul className="pagination pagination-lg">
                    <li><Link to='/'>&laquo;</Link></li>
                    <li className="active"><Link to='/'>1</Link></li>
                    <li><Link to='/'>3</Link></li>
                    <li><Link to='/'>4</Link></li>
                    <li><Link to='/'>5</Link></li>
                    <li><Link to='/'>&raquo;</Link></li>
                </ul>

            </div>
        );
    }
}

function mapState(state) {
    const { alertMsg, alertType } = state.alertReducer;
    const { loading, items} = state.usersReducer;
    return { alertMsg, alertType, loading, items };
}

const actionCreators = {
    getAll: UserActions.getAll,
    _delete: UserActions._delete,
};

const connected = connect(mapState, actionCreators)(UserPage);
export { connected as UserPage };
