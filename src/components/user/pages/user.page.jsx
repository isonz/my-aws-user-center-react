import React from 'react';
import moment from 'moment';
import './user.page.css';
import {connect} from "react-redux";
import {UserActions} from "../user.action";

class UserPage extends React.Component {

    pageSize = 5;
    prevId = {};
    lastId = {};
    tmpId = {};
    pageList = [];
    currentPage = 0;

    constructor(props) {
        super(props);
        this.state = {
            items: {},
            users: [],
        };
        this.previousPage = this.previousPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this._delete = this._delete.bind(this);
    }

    componentDidMount() {
        this.props.getAll('', this.pageSize);
    }

    previousPage(){
        if(this.currentPage > 1) {
            let prevId = this.pageList[this.currentPage - 2];
            this.props.getAll(prevId.lastId.id, this.pageSize);
        }else{
            this.props.getAll('', this.pageSize);
        }
        this.currentPage--;
    }

    nextPage(){
        this.props.getAll(this.lastId.id, this.pageSize);
        this.pageList.push({prevId: this.prevId, lastId: this.lastId});
        this.currentPage ++;
    }

    _delete(e, id){
        e.preventDefault();
        return this.props._delete(id);
    }

    render() {
        const { loading, alertMsg, alertType, items} = this.props;

        const lastId = 'undefined' === typeof items ? {} : items.LastEvaluatedKey;
        if(JSON.stringify(lastId) !== "{}" && this.lastId.id !== lastId.id){
            this.prevId = this.tmpId;
            this.tmpId = this.lastId;
            this.lastId = lastId;
        }
        // console.log(lastId);
        // console.log(this.pageList);

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
                        <td className='delete'><a href="##" onClick={e => {this._delete(e, user.id)}}>DELETE</a></td>
                    </tr>
                    )}
                    </tbody>
                </table>

                <ul className="pager pager-lg">
                    <li className={this.currentPage < 1 ? 'previous disabled' : 'previous'}><a href='##' onClick={this.currentPage < 1 ? null : this.previousPage}>&larr; Older</a></li>
                    <li className={JSON.stringify(lastId) === "{}" ? 'next disabled' : 'next'}><a href='##' onClick={JSON.stringify(lastId) === "{}" ? null : this.nextPage}>Newer &rarr;</a></li>
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
