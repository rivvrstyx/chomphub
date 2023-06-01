import React, { useState } from "react";
import { Button, Card, Col, Collapse, Container, Form, FormControl, Nav, NavDropdown, Navbar, Row } from "react-bootstrap";

const HomePage = () => {
    const [expanded, setExpanded] = useState(false);

    
     const toggleExpansion = () => {
        setExpanded(!expanded)
      };

        return (
     <Container>

<div>
      <Container className="mt-3">
        {/* Content of the website goes here */}
      </Container>
      <Navbar bg="dark" variant="dark" className="fixed-bottom">
        <Container>
          <Navbar.Text>
            © 2023 ChompHub. All rights reserved.
          </Navbar.Text>
        </Container>
      </Navbar>
    </div>
                
    </Container>
        );

    }

export default HomePage;
