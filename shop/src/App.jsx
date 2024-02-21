import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import data from './data';

function App() {
  let [shoes] = useState(data);

  console.log(shoes);

  return (
    <>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">FreeShop</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">SHOP</Nav.Link>
              <Nav.Link href="#pricing">COMMUNITY</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <div className="main-bg"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 flex flex-col items-center justify-center">
              <img
                src="https://codingapple1.github.io/shop/shoes1.jpg"
                width="80%"
              />
              <h4>상품명</h4>
              <p>상품정보</p>
            </div>
            <div className="col-md-4 flex flex-col items-center justify-center">
              <img
                src="https://codingapple1.github.io/shop/shoes2.jpg"
                width="80%"
              />
              <h4>상품명</h4>
              <p>상품정보</p>
            </div>
            <div className="col-md-4 flex flex-col items-center justify-center">
              <img
                src="https://codingapple1.github.io/shop/shoes3.jpg"
                width="80%"
              />
              <h4>상품명</h4>
              <p>상품정보</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
