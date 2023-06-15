import React from "react";
import Collapsible from "./Collapsible";
import {Col, Container, Row} from "react-bootstrap";
import train from "../../assets/video/train.mp4";
import TrackVisibility from "react-on-screen";
import max from "../../assets/img/max.png";
import Lessons from "./Lessons";

function Levels(){
    return (
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
                    <img className='train-img' src={max} alt="dog"/>
                  <h1>Max</h1>
                    <div>
                        <Collapsible label='LEVEL I'>
                            <Lessons/>
                         </Collapsible>
                        <Collapsible label='LEVEL II'>
                            <p>Lekcja 12</p>
                        </Collapsible>
                        <Collapsible label='LEVEL III'>
                            <p>Lekcja 24</p>
                        </Collapsible>
                    </div>
                </span></div>}
                        </TrackVisibility>
                    </Col>

                </Row>
            </Container>
        </section>

    );
}

export default Levels;