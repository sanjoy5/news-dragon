import React from 'react'
import { Button, ListGroup } from 'react-bootstrap'
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div className='px-2'>
            <div>
                <h3 className='mb-4 fs-4 fw-bold'>Login With</h3>
                <Button variant="outline-primary mb-3" className="btn-lg d-flex align-items-center gap-2"> <FaGoogle className='fs-3' /> Login with Google</Button>
                <Button variant="outline-dark" className="btn-lg d-flex align-items-center gap-2"><FaGithub className='fs-3' />Login with Github</Button>
            </div>

            <div className='mt-5'>
                <h3 className='mb-4 fs-4 fw-bold'>Find us On</h3>

                <ListGroup>
                    <ListGroup.Item className=''>
                        <p className="fs-5 d-flex align-items-center gap-3 m-0 py-2"> <FaFacebookF style={{ color: "#1877f2" }} /> Facebook</p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <p className="fs-5 d-flex align-items-center gap-3 m-0 py-2"><FaTwitter style={{ color: "#1da1f2" }} /> Twitter</p>

                    </ListGroup.Item>
                    <ListGroup.Item>
                        <p className="fs-5 d-flex align-items-center gap-3 m-0 py-2"><FaInstagram style={{ color: "#e4405f" }} /> Instagram</p>
                    </ListGroup.Item>

                </ListGroup>

            </div>

            <div className="mt-5 py-4 px-2 rounded" style={{ backgroundColor: "#f3f3f3" }} >
                <h3 className='mb-4 fs-4 fw-bold ms-3'>Q-Zone</h3>
                <img src={qZone1} className='mb-4 w-100' alt="" />
                <img src={qZone2} className='mb-4 w-100' alt="" />
                <img src={qZone3} className='mb-4 w-100' alt="" />
            </div>

            <div className="mt-4 position-relative border p-4" style={{ height: "450px", width: "100%" }}>
                <div className="addbg d-flex flex-column align-items-center justify-content-center text-center h-100 w-100">
                    <h3 className="fs-4 fw-bolder  z-2 text-white">Create an Amazing Newspaper</h3>
                    <p className="my-4 text-white">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <button className="btn btn-danger btn-lg rounded-0">Learn More</button>
                </div>

            </div>


        </div>
    )
}

export default RightNav