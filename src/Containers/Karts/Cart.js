import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Cart.css';
import Aux from '../../HOC/Auxiliary/Auxiliary';
import { AuthContext } from '../../HOC/Context/Auth-Context';
import Table from '../../Components/UI/Table/Table';
import Modal from '../../Components/UI/Modal/Modal';
import { Col } from 'react-bootstrap';


class Cart extends Component {

    state = {
        bConfirm: false,
        bShowModal: false,
        sTextModal: ""
    }

    static contextType = AuthContext;

    //Function to handle Delete in Cart Table
    fnDeletItemHandler = (id) => {
        this.props.cartRemoveHandler(id);
    };

    //function to place the order
    fnConfirmOrderHandler = (oEvent) => {
        let sTextModal = "";
        if (this.context.isAuth) {
            sTextModal = "Are you sure you want to place the order?"
        } else {
            sTextModal = "Please login to confirm the order."
        }
        this.setState({
            bShowModal: true,
            sTextModal: sTextModal
        });
    };

    //function to empty the cart
    fnEmptyCartHandler = (oEvent) => {

    };

    //function to handle Modal
    fnModalHandler = (oEvent) => {
        this.setState({
            bShowModal: false,
            sTextModal: ""
        });
    };


    render() {

        let cssEmptyCartBtn = [classes.EmptyBtn, classes.PlaceorderBtn];
        let cssConfirmCartBtn = [classes.EmptyBtn, classes.ConfirmBtn];

        const aCartItems = [...this.props.aCartItems];
        let XTable = (aCartItems.length) ? <Table aRows={aCartItems} iTotalAmt={this.props.iTotalAmt} fnDeletItemHandler={this.fnDeletItemHandler} /> : <p> Cart is Empty</p>;
        let cssTableContainer = [classes.Col_12, classes.TableContainer];
        return (
            <Aux>
                <Modal modalClosed={(oEvent) => this.fnModalHandler(oEvent)} show={this.state.bShowModal}>{this.state.sTextModal}</Modal>
                <div className={classes.Cart}>
                    <Col sm={12} style={{
                        backgroundColor: 'lightgrey'
                    }}>
                        <h1 className={classes.CardHeading}>Cart</h1>
                    </Col>
                    <div className={cssTableContainer.join(" ")}>
                        {XTable}
                    </div>
                    {aCartItems.length ?
                        <div className={classes.Col_12}>
                            <button onClick={(oEvent) => this.fnConfirmOrderHandler(oEvent)} className={cssConfirmCartBtn.join(" ")}>PLACE ORDER</button>
                            <button onClick={(oEvent) => this.fnEmptyCartHandler(oEvent)} className={cssEmptyCartBtn.join(" ")}>EMPTY CART</button>
                        </div> : null
                    }
                </div>
            </Aux>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        aCartItems: state.aCartItems,
        iTotalAmt: state.iTotalAmt
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        cartRemoveHandler: (index) => dispatch({ type: "REMOVEFROMCART", id: index })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);