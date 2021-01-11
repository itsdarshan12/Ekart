import React, { Component } from 'react';
import classes from './NavItems.css';
import NavItem from './NavigationItem/NavItem';
import { AuthContext } from '../../../HOC/Context/Auth-Context';
import { connect } from 'react-redux';
import { BsFillPersonFill } from "react-icons/bs";
import { FaShoppingCart, FaThList } from "react-icons/fa";

class NavItems extends Component {

    state = {

    }
    static contextType = AuthContext;

    componentDidUpdate() {

    }

    loginHandler = () => {
        this.context.login();
    };

    render() {

        const cssFltStyle = {
            float: 'right',
            marginRight: '8px'
        }

        const cssBtnStyle = {
            float: "right",
            marginRight: "8px",
            background: "#3e3eea",
            minWidth: "4rem",
            width: 'auto',
            height: "2rem",
            borderRadius: "5px",
        }

        const cssUserBtn = {
            float: "right",
            marginRight: "8px",
            background: "#3e3eea",
            width: "2rem",
            height: "2rem",
            padding: "1px",
            borderRadius: "5px"
        };

        const iCartItems = this.props.aCartItems.length;
        const iWishItems = this.props.aWishItems.length;

        return (
            <ul className={classes.NavItems}>
                <NavItem Link="/Home" >Ekart</NavItem>
                <NavItem Link="/" exact >Home</NavItem>
                <NavItem Link="/Products" >Products</NavItem>
                {/* <NavItem Link="/Account" >Account</NavItem> */}
                {this.context.isAuth ? <button style={cssUserBtn}>
                    <NavItem style={cssFltStyle} Link="/Login" ><BsFillPersonFill /></NavItem>
                </button> :
                    <button onClick={this.loginHandler} style={cssBtnStyle}>
                        Login
                    </button>
                }
                <button style={cssBtnStyle}>
                    <NavItem style={cssFltStyle} Link="/Cart" ><FaShoppingCart />({iCartItems})</NavItem>
                </button>
                <button style={cssBtnStyle}>
                    <NavItem style={cssFltStyle} Link="/Wishlist" ><FaThList />({iWishItems})</NavItem>
                </button>

            </ul>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        aCartItems: state.aCartItems,
        aWishItems: state.aWishItems
    };
}
const mapDispatchToProps = (dispatch) => {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavItems);