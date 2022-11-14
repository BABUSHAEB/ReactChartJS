import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



function NavBar() {
    return (
        <>
            <Navbar bg="warning" expand="lg" variant="light">
                <Container>
                <Navbar.Brand as={Link} to="/">  ChartJs</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                           <Nav.Link as={Link} to="/linecharts" >LineCharts </Nav.Link>
                           <Nav.Link as={Link} to="/barcharts" >BarCharts </Nav.Link>
                           <Nav.Link as={Link} to="/piecharts" >PieCharts </Nav.Link>
                           <Nav.Link as={Link} to="/doughnutcharts" >DoughnutCharts </Nav.Link>
                           <Nav.Link as={Link} to="/polarareacharts" >PolarAreaCharts </Nav.Link>
                           <Nav.Link as={Link} to="/radarcharts" >RadarCharts </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br />

        </>
    );
}


export default NavBar;
