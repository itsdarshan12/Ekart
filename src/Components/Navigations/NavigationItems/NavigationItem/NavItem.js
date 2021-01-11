import React from 'react';
import classes from './NavItem.css';
import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
    return (
        <li style={props.style} className={classes.NavItem}>
            <NavLink
                to={props.Link}
                exact={props.exact}
                activeClassName={classes.active}>
                {props.children}
            </NavLink>
        </li>
    );
};

export default NavItem;