import React from 'react';
import { Col } from 'react-bootstrap';
import classes from './Card.css';

const Card = (props) => {

    let cssCardStyle = [classes.card, props.style];
    return (
        <Col sm={props.columnValue}>
            <div className={cssCardStyle.join(" ")}>
                {props.children}
            </div>
        </Col>
    );
};


export default Card;