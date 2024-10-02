import React, { useEffect, useState } from "react";
import "./Navbars.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Navbars() {

  const navigate=useNavigate()
  const loggedIn=sessionStorage.getItem('login')  
  const logIn=sessionStorage.getItem('role')
  const token=sessionStorage.getItem('token')

  const removed=()=>{
    sessionStorage.clear()
    navigate('/')
  }


  const [search,SetSearch]=useState([])
  const [item,SetItem]=useState([])
  const [searchTerm,SetSearchTerm]=useState('')

  useEffect(()=>{
    axios.get('http://localhost:1001/api/plants/viewplant',{
headers:{Authorization:`Bearer ${token}`},
    })
    .then((response)=>{
      console.log(response);
      SetSearch(response.data.data)
    })
    .catch((error)=>{
      console.log(error);
      
    })
  },[])

const searchButton=()=>{
  if(token){

  const filteredItem= search.filter(item=>item.name.toLowerCase().includes(searchTerm.toLowerCase()))
  console.log(filteredItem);
  SetItem(filteredItem)
  
  navigate(`/plantsview/name/${filteredItem[0]?.name}`)
  console.log(filteredItem[0]?.name);
  
}
else{
  navigate('/login')
}
}

const dataChange=(event)=>{
  SetSearchTerm(event.target.value)
}





  return (
    <>
      <Navbar expand="lg" className="navpage" p-0>
        <Container fluid >
          <Navbar.Brand href="/" className="text-light">
          <img src="/images/greensbg.png" alt="" height={'80px'} width={'80px'} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll"/>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {loggedIn==='true' ?(<>

              <Nav.Link href="/" className="text-light">
                Home
              </Nav.Link>

              {logIn=='admin' ?(<>

                <Nav.Link href="/plantsadd" className="text-light">
                Add plants
              </Nav.Link>

              </>):(<>
                <Nav.Link href="/addblog" className="text-light">
                Add Blogs
              </Nav.Link>
              </>)}

              <Nav.Link href="/plantsview" className="text-light">
                Plants
              </Nav.Link>
              
              <Nav.Link href="/viewblog" className="text-light">
                Blogs
              </Nav.Link>
              <Nav.Link href="/profile" className="text-light">
                Profile
              </Nav.Link>
              <Nav.Link href="/" className="text-light" onClick={removed}>
                Logout
              </Nav.Link>
              </>):(<>
              
              <Nav.Link href="/" className="text-light">
                Home
              </Nav.Link>
               
                {/* <Nav.Link href="/plantsadd" className="text-light">
                Add plants
              </Nav.Link> */}

                  {/* <Nav.Link href="/addblog" className="text-light">
                Add Blogs
              </Nav.Link> */}

                <Nav.Link href="/" className="text-light">
                Blogs
              </Nav.Link>
                
              <Nav.Link href="/" className="text-light">
                Plants
              </Nav.Link>

             <Nav.Link href="/register" className="text-light">
                Register
              </Nav.Link>

              <Nav.Link href="/login" className="text-light">
                Login
              </Nav.Link>
              </>)}
              
               

            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={dataChange}
                name="search"
                value={searchTerm}
              />
              <Button variant="outline-light search-text-light" onClick={searchButton}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
