import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <MDBFooter className="pt-4 mt-4">
                <MDBContainer fluid className="text-center text-md-left text-white" style={{height:'400px', backgroundColor:'#000000'}}>
                    <MDBRow justify-content='space-between'>
                        <MDBCol md="6"><br/>
                            <h1 className="title text-white" style={{fontSize:'40px'}} >Z A L O R A</h1><br></br>
                            <p>
                            Sebagai Pusat Fashion Online di Asia, kami menciptakan kemungkinan-kemungkinan gaya tanpa batas dengan cara memperluas jangkauan produk, mulai dari produk internasional hingga produk lokal dambaan. Kami menjadikan Anda sebagai pusatnya.
                            </p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="6"><br/><br/>
                            <h5 className="title">LAYANAN</h5>
                            <ul>
                            <li className="list-unstyled">
                                <a href="#!">Bantuan</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Hubungi Kami</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Konfirmasi Transfer</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Status Order</a>
                            </li>
                            </ul>
                        </MDBCol>
                        <MDBCol md="6"><br/><br/>
                            <h5 className="title">TENTANG KAMI</h5>
                            <ul>
                            <li className="list-unstyled">
                                <a href="#!">About Us</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Persyaratan dan Ketentuan</a>
                            </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <a href="https://www.facebook.com/"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="https://www.instagram.com/?hl=en"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                        <a href="https://www.pinterest.com/"><i class="fa fa-pinterest-p" aria-hidden="true"></i></a>
                        <a href="https://twitter.com/?lang=en"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                    </MDBRow>
                </MDBContainer>
                
            </MDBFooter>
         );
    }
}        
            
 
export default Footer;
    
    
    