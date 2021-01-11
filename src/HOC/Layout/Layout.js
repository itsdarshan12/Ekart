import React from 'react';
import classes from './Layout.css';
import Toolbar from '../../Components/Navigations/Toolbar/Toolbar';

const Layout = (props) => {
    return (
        <div>
            <Toolbar />
            <main className={classes.MainContent}>
                {props.children}
            </main>
        </div>
    );
};

export default Layout;