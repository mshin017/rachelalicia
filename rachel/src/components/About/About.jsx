import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import './About.css'
import library from '../../images/library.jpg'

export default class About extends Component {
    render() {
        return (
            <Grid className='aboutgrid'>
                <Row className='aboutRow'>
                    <Col md={2}></Col>
                    <Col md={4} className='aboutMe'>
                        <h2> MY STORY / ABOUT ME</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                            aute irure dolor in reprehenderit in voluptate velit esse 
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                             cupidatat non proident, sunt in culpa qui officia deserunt 
                             mollit anim id est laborum.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                            aute irure dolor in reprehenderit in voluptate velit esse 
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                             cupidatat non proident, sunt in culpa qui officia deserunt 
                             mollit anim id est laborum.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                            aute irure dolor in reprehenderit in voluptate velit esse 
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                             cupidatat non proident, sunt in culpa qui officia deserunt 
                             mollit anim id est laborum.
                        </p>
                        
                    </Col>
                    <Col md={4} className='aboutPic'>
                        <img src={library} className="aboutmepic" alt='aboutme' />
                    </Col>
                    <Col md={2}></Col>
                </Row>
            </Grid>
        )
    }
}