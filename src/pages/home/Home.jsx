import React, { Component } from 'react';
import { UncontrolledCarousel, Row, Col } from "reactstrap";
import items from '../../component/Carousel';
import Homescreen from '../../assets/zalora.gif'
import Header from '../../component/header/Header'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';

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
                <MDBFooter className="pt-4 mt-4">
                    <MDBContainer fluid className="text-center text-md-left text-white" style={{height:'500px', backgroundColor:'#000000'}}>
                        <MDBRow>
                            <MDBCol md="6"><br/>
                                <h1 className="title text-white" style={{fontSize:'40px'}} >Z A L O R A</h1><br></br>
                                <p>
                                Sebagai Pusat Fashion Online di Asia, kami menciptakan kemungkinan-kemungkinan gaya tanpa batas dengan cara memperluas jangkauan produk, mulai dari produk internasional hingga produk lokal dambaan. Kami menjadikan Anda sebagai pusatnya.
                                </p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <a className="btn-floating btn-lg btn-fb" type="button" role="button"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn-floating btn-lg btn-tw" type="button" role="button"><i className="fab fa-twitter"></i></a>
                            <a className="btn-floating btn-lg btn-gplus" type="button" role="button"><i className="fab fa-google-plus-g"></i></a>
                        </MDBRow>
                    </MDBContainer>
                </MDBFooter>
            </div>
    );
}
}

export default Home;