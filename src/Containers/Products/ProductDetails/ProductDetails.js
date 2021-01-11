import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import classes from './ProductDetails.css';
import defaultimage from '../../../Assets/Images/defaultimage.jpg';
import { Col, Container, Row } from 'react-bootstrap';
// import Aux from '../../../HOC/Auxiliary/Auxiliary';

class Details extends Component {

    state = {
        bDetails: false,
        Quantity: 1
    }

    componentDidMount() {
        this.setState({ bDetails: true });
    }

    shouldComponentUpdate() {
        const aProductDetail = [...this.props.aViewProduct]
        return !aProductDetail.length ? false : true;
    }

    //function to handle Add to Cart
    AddToCartHandler = (oEvent) => {
        const aProductDetail = [...this.props.aViewProduct];
        const oTempData = aProductDetail[0];
        const oCloneState = { ...this.state };
        const iQty = oCloneState.Quantity;
        let oPayload = {
            sItemType: oTempData.sItemType,
            sProductType: oTempData.sProductType,
            sRouteKey: oTempData.sRouteKey,
            index: oTempData.oData.id,
            bDetails: this.state.bDetails,
            oData: oTempData.oData,
            Quantity: iQty
        }
        this.props.cartlistHandler(oPayload);
    };

    //function to handle Add to wish List
    fnAddwishlistHandler = (oEvent) => {
        const aProductDetail = [...this.props.aViewProduct]
        const oTempData = aProductDetail[0];
        let oPayload = {
            sItemType: oTempData.sItemType,
            sProductType: oTempData.sProductType,
            sRouteKey: oTempData.sRouteKey,
            index: oTempData.oData.id,
            bDetails: this.state.bDetails
        }
        this.props.WishlistHandler(oPayload);
    };

    //function to handle onCHange Qty
    QtyHandler = (oEvent) => {
        let iQty = Number(oEvent.target.value);
        iQty = isNaN(iQty) ? 1 : iQty;
        this.setState({
            Quantity: iQty
        });
    }

    render() {

        const aProductDetail = [...this.props.aViewProduct]
        const oTempProduct = aProductDetail[0];
        let sTitle = oTempProduct.sProductType;
        let sItem = oTempProduct.sItemType;
        let sRouteKey = oTempProduct.sRouteKey;
        const bWishList = oTempProduct.oData.bWishList;
        const sProductName = oTempProduct.oData.name;
        let cssImageDiv = [classes.ProductImg];
        let cssDetailSDiv = [classes.DetailSection];
        let sWishListBtnTxt = "";
        let bEditWishListbtn = true;
        let cssWishListBtnBg = {};
        if (bWishList) {
            sWishListBtnTxt = "Added to Wishlist";
            cssWishListBtnBg.backgroundColor = 'rgb(40, 228, 40)';
            bEditWishListbtn = true;
        } else {
            sWishListBtnTxt = "Add to Wishlist";
            cssWishListBtnBg.backgroundColor = '#ff4343';
            bEditWishListbtn = false;
        }
        return (
            <div className={classes.ProductDetails}>
                <Col sm={12}>
                    <span>/</span><NavLink to={"/Products/" + sRouteKey}>{sTitle}</NavLink><span> / </span><NavLink to={"/Products/" + sRouteKey}>{sItem}</NavLink>
                </Col>
                <Col sm={12} style={{
                    backgroundColor: 'lightgrey'
                }}>
                    <h1 className={classes.ProductHeading}>{sProductName}</h1>
                </Col>
                <Container>
                    <Row>
                        <Col sm={6}>
                            <div className={cssImageDiv.join(" ")}>
                                <div className={classes.ImgContainer}>
                                    <img style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        borderRadius: '5px'
                                    }} src={defaultimage} />
                                </div>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className={cssDetailSDiv.join(" ")}>
                                <h3 className={classes.PriceHeading}>{oTempProduct.oData.price} .Rs</h3>
                                <p className={classes.SubDetailHeading}>FREE SHIPPING with $35 Purchase</p>
                                <div className={classes.Quantity}>
                                    <p style={{
                                        float: 'left'
                                    }}>Quantity:</p>
                                    <input className={classes.QtyInput} value={this.state.Quantity} onChange={(oEvent) => this.QtyHandler(oEvent)} type="number" />
                                </div>
                            </div>
                            <Row>
                                <Col xs={6}>
                                    <button onClick={(oEvent) => this.AddToCartHandler(oEvent)} className={classes.CartBtn}>Add to Card</button>
                                </Col>
                                <Col xs={6} style={{
                                    textAlign: 'right'
                                }}>
                                    <button style={cssWishListBtnBg} onClick={(oEvent) => this.fnAddwishlistHandler(oEvent)} disabled={bEditWishListbtn} className={classes.WishlistBtn}>{sWishListBtnTxt}</button>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Container>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        aViewProduct: state.aViewProduct
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        WishlistHandler: (oPayload) => dispatch({ type: "ADDTOWISHLIST", oPayload: oPayload }),
        cartlistHandler: (oPayload) => dispatch({ type: "ADDTOCART", oPayload: oPayload })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);