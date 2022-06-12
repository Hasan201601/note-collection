import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };
  const user = true;
  return (
    <Navbar bg="primary" expand="md" className="">
      <Container className="m-auto">
        <Navbar.Brand>
          <Link to="/">Note Collection</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
              <Link to="/">Note Collection</Link>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="m-auto">
              <Form>
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </Nav>
            <Nav className="m-auto">
              {user && (
                <>
                  <Nav.Link>
                    <Link to="mynotes">My notes</Link>
                  </Nav.Link>
                  <NavDropdown
                    title="Hasanuzzaman Hasan"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="#action/3.2">
                      My profile
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
