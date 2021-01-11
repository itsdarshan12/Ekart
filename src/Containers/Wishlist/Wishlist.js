import React, { Component } from 'react';
import classes from './Wishlist.css';
import { connect } from 'react-redux';
import ProductCard from '../../Components/ProductList/ProductCards/ProductCards';
import { Container, Row } from 'react-bootstrap';

class Wishlist extends Component {



    fnViewProductHandler = (oEvent, index) => {
        const aWishItems = [...this.props.aWishItems];
        let oTempData = aWishItems[index];
        let oPayload = {
            oData: oTempData,
            sItemType: oTempData.sItemType,
            sProductType: oTempData.sProductType
        };
        this.props.history.push("/Details/" + oTempData.sItemType);
        this.props.ViewProductHandler(oPayload);
    };

    render() {
        const cssCardStyle = {
            height: " 263px",
            width: "13%",
            float: "left",
            margin: "5px 37px 0px 5px",
            textAlign: 'center'
        };

        const aWishlist = [...this.props.aWishItems];
        let xWishListCard = null;
        if (!aWishlist.length) {
            xWishListCard = <p>Empty List!!</p>
        } else {
            xWishListCard = aWishlist.map((oProduct, index) => {
                return (
                    <ProductCard
                        key={index}
                        name={oProduct.name}
                        rating={oProduct.rating}
                        version={oProduct.version}
                        price={oProduct.price}
                        bWishList={oProduct.bWishList}
                        WishHandler={() => { }}
                        ViewProductHandler={(oEvent) => this.fnViewProductHandler(oEvent, index)} />
                );
            });
        }

        return (
            <Container>
                <Row>
                    {xWishListCard}
                </Row>
            </Container>

        );
    }
};

const mapStateToProps = (state) => {
    return {
        aWishItems: state.aWishItems
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        ViewProductHandler: (oPayload) => dispatch({ type: "VIEWPRODUCT", oPayload: oPayload })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);