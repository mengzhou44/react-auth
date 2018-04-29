import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../actions';


class Header extends Component {

    renderAuthButton() {
        if (this.props.authenticated) {
            return <button onClick={() => this.props.signout()}> Sign out </button>
        }
        return <button onClick={() => this.props.signin()}> Sign in </button>
    }

    render() {
        return (
            <div className='header' >
                <ul>

                    <li>
                        <button onClick={() => this.props.history.push('/')}>
                            Home
                    </button>
                    </li>
                    <li>
                        <button onClick={() => this.props.history.push('/resources')}>
                            Resources
                    </button>
                    </li>
                    <li>
                        {this.renderAuthButton()}
                    </li>

                </ul>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    };
}

export default connect(mapStateToProps, actions)(withRouter(Header));