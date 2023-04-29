import React from 'react'
import { Form, Container, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../../Provider/AuthProvider';

const Login = () => {

    const { signIn } = useAuthContext()
    const navigate = useNavigate()
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const handleLoginSubmission = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                navigate(from, { replace: true });
            }).catch(error => {
                console.log(error);
            })
    }

    return (
        <Container className='mx-auto formContainer shadow p-4 p-md-5 mx-3'>
            <h2 className="fs-4 fw-bold text-center">Login your account</h2>
            <Form onSubmit={handleLoginSubmission} className='mt-4'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className='p-3' type="email" placeholder="Enter email" name='email' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='p-3' type="password" placeholder="Enter password" name='password' required />
                </Form.Group>

                <Button className='w-100 py-3 mt-2' variant="dark" type="submit">Login</Button>
                <p className="m-0 pt-3 text-center text-mute">Dont’t Have An Account ? <Link to="/register" className="text-danger px-0">Register</Link></p>
            </Form>
        </Container>
    )
}

export default Login