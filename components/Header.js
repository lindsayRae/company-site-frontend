import Link from 'next/link';
import styles from '@/styles/Header.module.css';
// https://www.youtube.com/watch?v=6S52Oywgdlk&t=151s
import {
  Container,
  Button,
  Navbar,
  Nav,
  Brand,
  Toggle,
  Collapse,
  NavDropdown,
  Form,
  FormControl,
} from 'react-bootstrap';

export default function Header() {
  return (
    <header>
      <Navbar bg='light' expand='lg' fixed='top'>
        <Container>
          <Navbar.Brand href='/'>Lindsay's Co</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse
            id='basic-navbar-nav'
            className='justify-content-end'
          >
            <Nav className='mr-5'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/portfolio'>Portfolio</Nav.Link>
              <Nav.Link href='/blog'>Blog</Nav.Link>
            </Nav>
            <Nav className=''>
              <Nav.Link href='#link'>Log In</Nav.Link>
              <Nav.Link href='#link'>Contact</Nav.Link>
              {/* <Button variant="outline-success">Contact Us</Button>          */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
