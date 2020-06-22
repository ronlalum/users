import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';

import { login } from '../actions/usersActions';

class Login extends Component {

    UNSAFE_componentWillMount() {

        if (this.props.isLogged === true) {
            this.props.history.push("/");
        }
    }

    handlerLogin = (email, password) => {
        this.props.login(email, password);
        this.props.history.push("/");
    }

    render() {
        return (
            <div className="login-page">
                <LoginForm handlerLogin={this.handlerLogin}></LoginForm>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    
    return {
        isLogged: state.usersReducer.isLogged

    }

};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => {
            dispatch(login(email, password));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
