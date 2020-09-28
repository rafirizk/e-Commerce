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
import './Header.css'
import {FiUser} from 'react-icons/fi'


const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="headerZalora" dark expand="md">
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
            <input className="form-control w-120" type="search" placeholder="Search" aria-label="Search"/>
            <button className="mx-2">U</button>
            <button className="mx-2">W</button>
            <button className="mx-2">C</button>
          </Nav>
          </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;