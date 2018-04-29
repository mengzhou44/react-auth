import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import * as actions from '../actions';

class UserList extends Component {

    componentDidMount() {
        this.props.fetchUsers();
    }
    renderUser(user) {
        return (<div className='user-box' key={user.name}>
            <p> {user.name}</p>
            <p>{user.username} </p>
        </div>);
    }
    render() {
        if (this.props.error !== '') {
            return <div> {this.props.error}</div>;
        }


        if (this.props.users.length === 0) {
            return <p> Loading ... </p>;
        }

        return (
            <div>
                <p> users</p>
                {_.map(this.props.users, this.renderUser.bind(this))}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users.data,
        error: state.users.error
    }
}

export default connect(mapStateToProps, actions)(UserList);