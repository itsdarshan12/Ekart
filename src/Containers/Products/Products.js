import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import classes from './Products.css';
import Aux from '../../HOC/Auxiliary/Auxiliary';
import ProductList from '../../Components/ProductList/ProductList';
import { Col, Container, Row } from 'react-bootstrap';
class Products extends Component {

    state = {
        title: "",
        oProduct: {}
    }

    componentDidMount() {
        let sPath = this.props.location.pathname;
        if (sPath.indexOf("/Electronics") === -1) {
            this.props.history.push(sPath + "/Electronics");
        }
        this.fnProductHandler(null, 0);
    }

    //function to handle Toolbar Menu Clicks
    fnProductHandler = (oEvent, index) => {
        let aAllRoutes = [...this.props.aProductRoutes];
        let oCurrentData = aAllRoutes[index];
        const aAllProducts = [...this.props.aAllProducts];
        switch (oCurrentData.key) {
            case 'Electronics':
                const oElectronics = aAllProducts.find((oProduct) => {
                    return oProduct.title === oCurrentData.key;
                });

                this.setState({
                    title: oCurrentData.routeName,
                    oProduct: oElectronics
                });
                break;
            case 'Appliances':
                const oAppliances = aAllProducts.find((oProduct) => {
                    return oProduct.title === oCurrentData.key;
                });

                this.setState({
                    title: oCurrentData.routeName,
                    oProduct: oAppliances
                });
                break;
            case 'Men':
                const oMen = aAllProducts.find((oProduct) => {
                    return oProduct.title === oCurrentData.key;
                });

                this.setState({
                    title: oCurrentData.routeName,
                    oProduct: oMen
                });
                break;
            case 'Women':
                const oWomen = aAllProducts.find((oProduct) => {
                    return oProduct.title === oCurrentData.key;
                });

                this.setState({
                    title: oCurrentData.routeName,
                    oProduct: oWomen
                });
                break;
            case 'HomeFurnitures':
                const oHomeFurnitures = aAllProducts.find((oProduct) => {
                    return oProduct.title === oCurrentData.key;
                });

                this.setState({
                    title: oCurrentData.routeName,
                    oProduct: oHomeFurnitures
                });
                break;
        }
    };

    //function to handle Add to WishList
    fnWishlistHandler = (index, sItemType) => {
        let sProductType = this.state.title;
        let oPayload = {
            index: index,
            sItemType: sItemType,
            sProductType: sProductType
        };
        this.props.WishlistHandler(oPayload)
    };

    //function to handle View Products
    fnViewProductHandler = (oTempData, sItemType) => {
        let sProductType = this.state.title;
        let oPayload = {
            oData: oTempData,
            sItemType: sItemType,
            sProductType: sProductType
        };
        this.props.history.push("/Details/" + sItemType);
        this.props.ViewProductHandler(oPayload);
    };

    render() {

        const aProductRoutes = [...this.props.aProductRoutes];

        const xRoutes = aProductRoutes.map((oRoute, index) => {
            return (
                <li
                    className={classes.NavItem}
                    key={index}
                    onClick={(oEvent) => this.fnProductHandler(oEvent, index)}>
                    <NavLink
                        activeClassName={classes.active}
                        exact to={"/Products/" + oRoute.key}>
                        {oRoute.routeName}
                    </NavLink>
                </li>
            );
        });

        const oElectronic = { ...this.state.oProduct };
        let xProductLists = null;
        if (Object.keys(oElectronic).length) {
            const aTempProducts = [...oElectronic.aProductDetails];
            xProductLists = aTempProducts.map((oProduct, index) => {
                return (
                    <ProductList
                        key={index}
                        title={oProduct.title}
                        Products={oProduct.aProducts}
                        WishlistHandler={this.fnWishlistHandler}
                        ViewProductHandler={this.fnViewProductHandler} />
                );
            });
        }


        return (
            <Aux>
                <div className={classes.Products}>
                    <header className={classes.Toolbar}>
                        <nav>
                            <ul className={classes.NavItems}>
                                {xRoutes}
                            </ul>
                        </nav>
                    </header><br />
                    <Col sm={12} style={{
                        height: '20px'
                    }}></Col>
                    <Col sm={12}>
                        <h3 style={{
                            width: '100%',
                            float: 'left'
                        }}>{this.state.title}</h3>
                        <p style={{
                            fontSize: '14px'
                        }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </Col>
                    <Container>
                        <Row>
                            <Col sm={12}>
                                {xProductLists}
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Aux>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        aProductRoutes: state.aProductRoutes,
        aAllProducts: state.aAllProducts
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        WishlistHandler: (oPayload) => dispatch({ type: "ADDTOWISHLIST", oPayload: oPayload }),
        ViewProductHandler: (oPayload) => dispatch({ type: "VIEWPRODUCT", oPayload: oPayload })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);