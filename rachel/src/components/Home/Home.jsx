import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap';
import "./Home.css"
import bed from '../../images/bed.JPEG'
import pyramid from "../../images/pyramid1.jpg"
import dtla from '../../images/dtla.jpg'


export default class Home extends Component {
    render() {
        return (
            <Grid className='homegrid'>
                <Row className='HomeRow'>
                    <Col md={3} className='col1'>
                        {/* <img src='https://picsum.photos/600/400/?image=39' className='homepic1' alt='home1' /> */}
                        <img src={dtla} className='homepic1' alt='home1' />
                        <div className="menuBar">
                            <h1>RACHEL ALICIA</h1>
                            <ul className="menuList">
                                <ol><a href="/gallery">GALLERY</a></ol>
                            </ul>
                        </div>
                    </Col>
                    <Col md={6} className='col2'>
                        {/* <img src='https://picsum.photos/600/400/?image=677' className='homepic2' alt='home2' /> */}
                        <img src={bed} className='homepic2' alt='home2' />
                    </Col>
                    <Col md={3} className='col3'>
                        {/* <img src='https://picsum.photos/600/400/?image=931' className='homepic3' alt='home3' /> */}
                        <img src={pyramid} className='homepic3' alt='home3' />
                    </Col>
                </Row>
            </Grid>
        )
    }
}
