import React, { Component } from 'react';
import Cockpit from './Components/Cockpit/Cockpit';
import classes from './App.css';
import Aux from './HOC/Auxiliary/Auxiliary';
import { Col, Container, Row } from 'react-bootstrap';
import { HashRouter as Router } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Aux>
        <div className={classes.App}>
          <Router>
            <Cockpit />
          </Router>
        </div>
        <div className={classes.Mobile}>
          <Container>
            <Row>
              <Col sm={12}>
                <h1 className={classes.Font}>Sorry, I am still experimenting for mobile responsiveness</h1>
                <p className={classes.Para}>Soon i will update the build</p>
              </Col>
            </Row>
          </Container>
        </div>
      </Aux>
    );
  }
}

export default App;
