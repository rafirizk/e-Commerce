import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
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
         );
    }
}
 
export default Footer;
    
    
    