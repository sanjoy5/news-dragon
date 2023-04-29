import React from 'react'
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <Container style={{ marginBottom: "10px" }}>
            <div className="text-center pt-5 pb-4">
                <Link to='/'><img src={logo} height="50px" width="470px" alt="" /></Link>
                <p className='text-secondary mt-4 mb-3 fs-5'>Journalism Without Fear or Favour</p>
                <h4 className="fs-4 m-0">{moment().format("dddd, MMMM D, YYYY")}</h4>
            </div>
            <div className="d-flex gap-4 p-3 my-3" style={{ backgroundColor: "#F3F3F3" }}>
                <Button variant="danger" className='rounded-0 btn-lg'>Latest</Button>
                <Marquee speed={50} gradient={false} className='text-dark fs-5 '>
                    I can be a React component, multiple React components, or just some text....
                    I can be a React component, multiple React components, or just some text....
                    I can be a React component, multiple React components, or just some text....
                </Marquee>
            </div>


        </Container>
    )
}

export default Header