import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../../Provider/AuthProvider';

const Register = () => {
    const { createUser } = useAuthContext()
    const navigate = useNavigate()
    const [accepted, setAccepted] = useState(false)

    const handleRegSubmission = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const createdUser = result.user
                console.log(createUser);
                navigate('/login')
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }

    return (
        <Container className='mx-auto shadow p-4 p-md-5 formContainer mx-3 mb-5'>
            <h2 className="fs-4 fw-bold text-center">Register your account</h2>
            <Form className='mt-4' onSubmit={handleRegSubmission}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control className='p-3' type="text" placeholder="Enter Name" name='name' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control className='p-3' type="text" placeholder="Enter Photo URL" name='photo' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className='p-3' type="email" placeholder="Enter Email" name='email' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='p-3' type="password" placeholder="Enter Password" name='password' required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Check
                        onClick={handleAccepted}
                        type="checkbox"
                        label={<>Accept <Link className='px-0 text-primary' to="/terms">Terms & Conditions</Link> </>}
                        name='accept'
                    />
                </Form.Group>

                <Button className='w-100 py-3 mt-2' variant="dark" type="submit" disabled={!accepted}>Register</Button>
                <p className="m-0 pt-3 text-center text-mute">Already Have An Account ? <Link to="/login" className="text-danger px-0">Login</Link></p>
            </Form>
        </Container>
    )
}

export default Register