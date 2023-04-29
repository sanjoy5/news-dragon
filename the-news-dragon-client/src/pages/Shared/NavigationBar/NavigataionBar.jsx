import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../../Provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa'

const NavigataionBar = () => {

    const { user, logOut } = useAuthContext()

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <Container className='mb-4'>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto fs-5">
                            <Link className='text-decoration-none text-secondary' to='/'>Home</Link>
                            <Link to="">About</Link>
                            <Link to="">Career</Link>
                        </Nav>
                        <Nav className='d-flex align-items-center'>
                            {user && <Link to=""><FaUserCircle className='fs-1 text-dark' /></Link>}

                            {
                                user ? <>
                                    <Button onClick={handleLogout} className='rounded-0 btn-lg' variant="dark">Logout</Button>

                                </> : <>

                                    <Link to="/login"><Button className='rounded-0 btn-lg' variant="dark">Login</Button></Link>
                                </>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    )
}

export default NavigataionBar