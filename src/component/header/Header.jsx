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
import {FaUserAstronaut, FaCartArrowDown} from 'react-icons/fa'
import { IconName } from "react-icons/fa";
import Button from '@material-ui/core/Button';
import './Header.css'
import {FiHeart} from 'react-icons/fi'
import { colors } from '@material-ui/core';



const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar  fixed="top" className="headerZalora" dark expand="md">
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
              <NavLink href="/anak/">ANAK</NavLink>
            </NavItem>
            
            
          </Nav>
          <input className="form-control w-120" type="search" placeholder="Search" aria-label="Search"/>
            <UncontrolledDropdown>
              <DropdownToggle nav>
                <Button className="headerIcon" ><FaUserAstronaut/></Button>    
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem disabled>SELAMAT DATANG!</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>MASUK</DropdownItem>
                <DropdownItem>BUAT AKUN</DropdownItem>
                <DropdownItem>LIHAT STATUS PESANAN</DropdownItem>
                <DropdownItem>KONFIRMASI TRANSFER</DropdownItem>
                <DropdownItem>BANTUAN</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown>
              <DropdownToggle nav>
              	<Button className="headerIcon" ><FiHeart/></Button>         
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>KAMU PUNYA PRODUK DI <br/> WISHLIST KAMU</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <Button className="headerIcon" ><FaCartArrowDown/></Button>  
          </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;