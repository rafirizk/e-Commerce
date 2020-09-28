import React, { Component } from 'react';
import { UncontrolledCarousel, Row, Col } from "reactstrap";
import items from '../../component/Carousel';
import Homescreen from '../../assets/zalora.gif'
import Header from '../../component/header/Header'
import Footer from '../../component/footer/Footer'

class Home extends Component {
    state = { }

    render() { 
        return ( 
            <div>
                <Header/>
                <div style={{width:'100%'}} >
                    <img className='mt-5 ml-5 mx-auto' src={Homescreen} width='100%' height='70%'/>
                </div>
                <div className='text-black mt-5 px-1 py-1' style={{height:'8vh'}}>
                    <h3 className='d-flex justify-content-center' >Trending Now</h3>
                </div><br/><br/>
                <div>
                    <Row>
                        <Col md="8" className="mx-auto px-4 ">
                        <UncontrolledCarousel items={items} />
                        </Col>
                    </Row>
                </div>
                <div className='text-black mt-5 px-1 py-1' style={{height:'8vh'}}>
                    <h3 className='d-flex justify-content-center' >Shop By Categories</h3>
                </div><br/><br/>
                <Footer/>
            </div>
    );
}
}

export default Home;