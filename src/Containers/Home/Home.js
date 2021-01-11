import React, { Component } from 'react';
import classes from './Home.css';
import { connect } from 'react-redux';
import heroPoster from '../../Assets/Images/Posters/herothumbnail.png';
import { Col, Container, Row } from 'react-bootstrap';


class Home extends Component {
    render() {

        const aDiscounts = [...this.props.aDiscounts];
        let xDiscountCards = aDiscounts.map((oCur, index) => {
            return (
                <Col sm={3} key={index}>
                    <div className={classes.card}>
                        <img className={classes.CardPosters} src={oCur.img} />
                        <p className={classes.CardPosterDetails}>{oCur.discount}</p>
                    </div>
                </Col>
            );
        });

        return (
            <div className={classes.Home}>
                <section className={classes.heroSection}>
                    <Container>
                        <Row>
                            <Col sm={4}>
                                <img className={classes.heroPoster} src={heroPoster} />
                            </Col>
                            <Col sm={8}>
                                <h1 className={classes.heroHeading}>BE GOOD WITH YOUR MONEY</h1>
                                <p className={classes.heroSubContent}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p><br />
                                <input className={classes.shopnowBtn} type="submit" value="Shop Now" />
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className={classes.AboutUs}>
                    <h1 className={classes.SectionHeading}>MEGA SALE</h1><br />
                    <Row>
                        {xDiscountCards}
                    </Row>
                </section>
                <section className={classes.Footer}>

                </section>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        aDiscounts: state.aDiscounts
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);