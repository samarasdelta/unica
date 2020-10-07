import React from 'react';
import Button from '@material-ui/core/Button';

import { Form, FormGroup, Input, Footer } from 'reactstrap';

function MyForm() {
  return (
    <Form className="box">
      <Form className="login-form">
        
        <h1 className="text-center">
          <span className="font-weight-bold">UNICA</span>
        </h1>
        
        <h2 className="text-center pt-4">Welcome</h2>

        <div className="text-center pt-5">
        don't have an account? <span className="font-weight-bold">Sign up for free</span>
        </div>    

        <div className="pt-4">
          <FormGroup>
            <Input type="email" placeholder="Email"/>
          </FormGroup> 

          <FormGroup>
            <Input type="password" placeholder="Password"/>
          </FormGroup> 

          <Button variant="contained" color="primary">
            Log in
          </Button>
        </div>

      </Form>
    </Form>
  )
} 

export default MyForm;