import React from 'react'
import train from "../assets/video/train.mp4";
import {Col, Container, Row} from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import max from "../assets/img/max.png";
import { Link } from "react-router-dom";

const Train = () => {
    return(
        <section className="logged" id="logged">
            <Container>
                <div className='logged'>
                    <video src={train} autoPlay loop muted /> </div>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">
                    <h3>WYBIERZ PSA</h3>
                    <img className='train-img' src={max} alt="dog"/>
                    <h1><Link to="/levels">Max</Link></h1>
                </span></div>}
                        </TrackVisibility>
                    </Col>

                </Row>
            </Container>
        </section>
    )

}

export default Train