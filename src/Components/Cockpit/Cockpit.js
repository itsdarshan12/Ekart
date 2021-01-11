import React, { Component } from 'react';
import Layout from '../../HOC/Layout/Layout';
import Home from '../../Containers/Home/Home';
import Products from '../../Containers/Products/Products';
import LoginPage from '../../Containers/Authentication/LoginPage';
import UserPage from '../../Containers/Account/Account';
import NotFound from '../../Containers/NotFound/NotFound';
import Cart from '../../Containers/Karts/Cart';
import Wishlist from '../../Containers/Wishlist/Wishlist';
import ProductDetails from '../../Containers/Products/ProductDetails/ProductDetails';
import { Route, Switch } from 'react-router';


class Cockpit extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Switch>
                        <Route path="/Login" component={LoginPage} />
                        <Route path="/Cart" component={Cart} />
                        <Route path="/Wishlist" component={Wishlist} />
                        <Route path="/Account" component={UserPage} />
                        <Route path="/Details" component={ProductDetails} />
                        <Route path="/Products" component={Products} />
                        <Route path="/Home" exact component={Home} />
                        <Route path="/" exact component={Home} />
                        <Route component={NotFound} />
                    </Switch>
                </Layout>
            </div>
        );
    };
};

export default Cockpit;