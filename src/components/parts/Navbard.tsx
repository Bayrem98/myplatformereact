import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from "reactstrap";

export default function Navbard() {
  return (
    <div>
      <div>
        <div>
          <div>
            <Navbar color="light" expand="md" light>
              <NavbarBrand href="/">All Movies</NavbarBrand>
              <NavbarToggler onClick={function noRefCheck() {}} />
              <Collapse navbar>
                <Nav className="me-auto" navbar>
                  <NavItem>
                    <NavLink href="/components/">Films</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/components/">Series</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/components/">Kids Cartoon</NavLink>
                  </NavItem>
                  <UncontrolledDropdown inNavbar nav>
                    <DropdownToggle caret nav>
                      Langues
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Français</DropdownItem>
                      <DropdownItem>Anglais</DropdownItem>
                      <DropdownItem>Arabe</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
                <DropdownToggle>Login</DropdownToggle>
              </Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    </div>
  );
}
