import React, { Component } from 'react';
import classes from './NotFound.css';
import Aux from '../../HOC/Auxiliary/Auxiliary';
class NotFound extends Component {
    render() {
        return (
            <Aux>
                <div className={classes.NotFound}>
                    <p>Oops!!</p><br />
                    <p>Page not found</p>
                </div>
            </Aux>
        );
    };
};

export default NotFound;