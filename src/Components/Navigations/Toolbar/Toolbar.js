import React from 'react';
import NavItems from '../NavigationItems/NavItems';
import classes from './Toolbar.css';

const Toolbar = () => {
    return (
        <header className={classes.Toolbar}>
            <nav>
              <NavItems/>
            </nav>
        </header>
    );
};

export default Toolbar;