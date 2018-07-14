import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './News.css';
export default class News extends Component {

    render(){
        return(
            <div>
                <Image src="assets/cover-2.jpg" className="header-image" rounded />
                
                <Grid>
                    <h2>News</h2>
                    <Row>
                        <Col xs={12} sm={8} className="main-section">
                            <p>Always start with a clean brush in a light area and work outward. I'll show you exactly the kind of messes we get into sometimes. Talent is nothing more than a pursued interest. Let the brush play and have fun -- let it go! You've got to have a little sadness once in awhile to let you know when the good times come.</p>
                            <p>It should give you a lot of ideas of a lot of crazy things you can do. Don't think there's anybody that doesn't like mountains. Well, maybe there is. If you comply with that rule, how can you go wrong? This is where the whole ecosystem starts. Painting used to drive me crazy.</p>
                            <p>Practice visualizing things in your mind. Learn to use this knife, and you won't believe what it can do! Do whatever feels right. Only takes a minute. Always follow the angles.</p>
                            <p>You make the big decisions where all these things live in your world. Let's make some happy little clouds in our world. You do whatever works for you. I think you'll be tickled with what you can do with something that starts out looking this bad. We've got a conglomeration going on there!</p>
                        </Col>
                        <Col xs={12} sm={4} className="side-section">
                        <Image src="assets/cover-1.jpg" />
                        <p>Practice visualizing things in your mind. Learn to use this knife, and you won't believe what it can do! Do whatever feels right. Only takes a minute. Always follow the angles.</p>
                        </Col>
                    </Row>
                </Grid>
            </div>
            
        );
    }
}