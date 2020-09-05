import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { UserActions } from '../redux/actions/user.action';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return () => this.props.deleteUser(id);
    }

    render() {
        const { user, usersReducer } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {user.firstName}!</h1>
                <p>You're logged in with React!!</p>
                <h3>All registered users:</h3>
                {usersReducer.loading && <em>Loading users...</em>}
                {usersReducer.error && <span className="text-danger">ERROR: {usersReducer.error}</span>}
                {usersReducer.items &&
                    <ul>
                        {usersReducer.items.map((user, index) =>
                            <li key={user.id}>
                                {user.firstName + ' ' + user.lastName}
                                {
                                    user.deleting ? <em> - Deleting...</em>
                                    : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                    : <span className={'s-'+index}> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                }
                            </li>
                        )}
                    </ul>
                }
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

function mapState(state) {
    const { usersReducer, authenticationReducer } = state;
    const { user } = authenticationReducer;
    return { user, usersReducer };
}

const actionCreators = {
    getUsers: UserActions.getAll,
    deleteUser: UserActions._delete
};

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };
