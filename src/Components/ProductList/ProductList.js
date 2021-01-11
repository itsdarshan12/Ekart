import React from 'react';
import classes from './ProductList.css';
import ProductCard from './ProductCards/ProductCards';
import { Col, Row } from 'react-bootstrap';

const ProductList = (props) => {
    let cssProductTitle = [classes.Col_06, classes.ProductTitle];
    let aTempProduct = [...props.Products]
    const sItemType = props.title;

    //function to handle Props WishList
    const WishHandler = (oEvent, index) => {
        props.WishlistHandler(index, sItemType);
    };

    //function to handle Props View Products
    const ViewProduct = (oEvent, index) => {
        let oTempData = aTempProduct.find((oRow) => {
            return oRow.id === index;
        });
        props.ViewProductHandler(oTempData, sItemType);
    };

    let xProductCards = props.Products.map((oProduct, index) => {
        return (
            <ProductCard
                key={index}
                name={oProduct.name}
                rating={oProduct.rating}
                version={oProduct.version}
                price={oProduct.price}
                bWishList={oProduct.bWishList}
                ViewProductHandler={(oEvent) => { ViewProduct(oEvent, oProduct.id) }}
                WishHandler={(oEvent) => { WishHandler(oEvent, index) }} />
        );
    });
    return (
        <div className={classes.ProductList}>
            <div className={cssProductTitle.join(' ')}>
                <h3>{props.title}</h3>
            </div>
            <div className={cssProductTitle.join(' ')}>
                <input className={classes.ViewMoreBtn} type="Submit" value="VIEW MORE" readOnly />
            </div>
            <Row>
                {xProductCards}
            </Row>
        </div>
    );
};

export default ProductList;