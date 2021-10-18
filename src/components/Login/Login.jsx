import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth()
    return (
        <div className="col-lg-6 offset-3">
            <h2>Login </h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                    <Link to="/regester">
                    Regester here
                </Link>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Button variant="info" onClick={signInUsingGoogle}>
                    SignIn Using goog
                </Button>
            </Form>
        </div>
    );
};

export default Login;