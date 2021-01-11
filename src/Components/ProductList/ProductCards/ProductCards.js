import React from 'react';
import classes from './ProductCards.css';
import Card from '../../UI/Card/Card';
import defaultProduct from '../../../Assets/Images/defaultProduct.png'
import { Col, Row } from 'react-bootstrap';

const ProductCard = (props) => {

    let cssSpanTag = {
        height: '2rem',
        padding: '1px',
        width: '48%'
    };


    let cssViewBtn = [classes.CardBtns, classes.ViewBtn];
    let cssWishListBtn = [classes.CardBtns, classes.WishListBtn];
    let sWishListBtnTxt = "";
    let bEditWishListbtn = true;
    let cssWishListBtnBg = {};
    if (props.bWishList) {
        sWishListBtnTxt = "Wishlist";
        cssWishListBtnBg.backgroundColor = 'rgb(40, 228, 40)';
        bEditWishListbtn = true;
    } else {
        sWishListBtnTxt = "Wishlist";
        cssWishListBtnBg.backgroundColor = '#ff4343';
        bEditWishListbtn = false;
    }

    return (
        <Card columnValue={3} style={classes.CardStyle}>
            <img className={classes.ProductCardImg} src={defaultProduct} />
            <p style={{
                margin: '7px 0 1px 0'
            }} className={classes.CardDetails}>{props.name}</p>
            <p className={classes.CardDetails}>{props.version}</p>
            <div style={cssSpanTag} className={classes.Col_06}>
                <span className={classes.Rating}>{props.rating}</span>
            </div>
            <div style={cssSpanTag} className={classes.Col_06}>
                <span style={{
                    fontWeight: 'bold'
                }}>{props.price}.Rs</span>
            </div>
            <Row>
                <Col xs={6}>
                    <button style={cssWishListBtnBg} disabled={bEditWishListbtn} onClick={props.WishHandler} className={cssWishListBtn.join(" ")}>{sWishListBtnTxt}</button>
                </Col>
                <Col xs={6}>
                    <button onClick={props.ViewProductHandler} className={cssViewBtn.join(" ")}>View</button>
                </Col>
            </Row>
        </Card>
    );
};

export default ProductCard;