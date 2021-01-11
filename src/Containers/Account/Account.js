import React, { Component } from 'react';
import classes from './Account.css';
import Aux from '../../HOC/Auxiliary/Auxiliary';
class Account extends Component {
    render() {
        return (
            <Aux>
                <div className={classes.Account}>
                    <p>Account</p>
                </div>
            </Aux>
        );
    };
};

export default Account;