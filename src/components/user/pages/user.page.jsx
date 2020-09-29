import React from 'react';
import { Link } from 'react-router-dom';
import './user.page.css';
import {connect} from "react-redux";
import {UserActions} from "../user.action";

class UserPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {},
        };
    }

    componentDidMount() {
        this.props.getAll(1, 10);
        this.setState({
        });
    }

    render() {
        const { loading, alertMsg, alertType} = this.props;
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

                    <tr>
                        <td>Tanmay</td>
                        <td>Bangalore</td>
                        <td>560001</td>
                        <td>560001</td>
                        <td className='delete'><Link to='/main/users/delete/:id'>DELETE</Link></td>
                    </tr>

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
    const { loading } = state.usersReducer;
    return { alertMsg, alertType, loading };
}

const actionCreators = {
    getAll: UserActions.getAll,
    _delete: UserActions._delete,
};

const connected = connect(mapState, actionCreators)(UserPage);
export { connected as UserPage };
