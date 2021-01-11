import React, { Component } from 'react';
import classes from './LoginPage.css';
import Aux from '../../HOC/Auxiliary/Auxiliary';
class LoginPage extends Component {
    render() {
        return (
            <Aux>
                <div className={classes.LoginPage}>
                    <p>LoginPage</p>
                </div>
            </Aux>
        );
    };
};

export default LoginPage;