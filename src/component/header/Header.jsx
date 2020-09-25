import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';    

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar fixed-top navbar-dark bg-dark" color="light" light expand="md">
        <NavbarBrand href="/">Z A L O R A</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        {/* <nav class="navbar fixed-top navbar-light bg-light">
        <a class="navbar-brand" href="#">Fixed top</a>
        </nav> */}
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/wanita/">WANITA</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/pria/">PRIA</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/pria/">ANAK</NavLink>
            </NavItem>
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
            
          </Nav>
            <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline my-2 my-sm-0" type="submit"><i class="fas fa-search"></i></button>
            </form>
            <button className="btn-watchvideo"><i class="far fa-heart"></i></button>

            <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">
            </a>
            </nav>
            
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;