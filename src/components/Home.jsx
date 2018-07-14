import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';
export default class Home extends Component {

    render(){
        return(
            <Grid>
                <Carousel>
                    <Carousel.Item className="" >
                        <Image src="assets/cover-1.jpg" />
                        <Carousel.Caption>
                            <h2>Welcome to bbahaida.com</h2>
                            <p>This is a website developed with React, React-Router, React-Bootstrap</p>
                            <Link to="/about">
                                <Button bsStyle="primary">
                                    About us
                                </Button>
                            </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src="assets/cover-2.jpg" />
                        <Carousel.Caption>
                            <h2>We are a team</h2>
                            <p>This is a website developed with React, React-Router, React-Bootstrap</p>
                            <Link to="/news">
                                <Button bsStyle="primary">
                                    News
                                </Button>
                            </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                </Carousel>
                <Row className="show-grid text-center" >
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/people-1.jpg" circle className="profile-pic" />
                        <h3>John</h3>
                        <p>Fluff that up. Be so very light. Be a gentle whisper. I sincerely wish for you every possible joy life could bring. There's nothing wrong with having a tree as a friend. For the lack of a better word I call them hangy downs.
</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/people-2.jpg" circle className="profile-pic" />
                        <h3>Jolly</h3>
                        <p>Fluff that up. Be so very light. Be a gentle whisper. I sincerely wish for you every possible joy life could bring. There's nothing wrong with having a tree as a friend. For the lack of a better word I call them hangy downs.
</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/people-3.jpg" circle className="profile-pic" />
                        <h3>Khan</h3>
                        <p>Fluff that up. Be so very light. Be a gentle whisper. I sincerely wish for you every possible joy life could bring. There's nothing wrong with having a tree as a friend. For the lack of a better word I call them hangy downs.
</p>
                    </Col>
                </Row>
            </Grid>
            
        );
    }
}