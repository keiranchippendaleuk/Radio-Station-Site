import React from "react";
import '../App.css';
import image from '../wmbc_image.png'
import { Button, Navbar, Container, Nav, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Categories(){
  const [categories, setCategories] = React.useState(null);

  React.useEffect(() => {
    fetch("/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  
  return(
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/admin">
            <img
            alt=""
            src={image}
            width="30"
            height="30"
            className="d-inline-block align-top"
            />{' '}
          &nbsp;Administration
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/admin/programs">Programs</Nav.Link>
            <Nav.Link href="/admin/audios">Audios</Nav.Link>
            <Nav.Link href="/admin/categories">Categories</Nav.Link>
            <Nav.Link href="/admin/genres">Genres</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <div className="Table">
        <br/>
        <h1>Categories</h1>
        <Table striped bordered hover >
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {categories == null ?
            <tr>
              <td colSpan={3} >Loading...</td>
            </tr>
            : 
            categories.map((info) => {
              return(
                <tr>
                  <td>{info.id}</td>
                  <td>{info.name}</td>
                  <td>{info.description}</td>
                </tr>
              )
            }) }
          </tbody>
        </Table>
        <Button variant="primary" href="/admin/categories/new" style={{justifyContent:'right'}}>Create New</Button>
      </div>
    </>
  );
}

export default Categories;