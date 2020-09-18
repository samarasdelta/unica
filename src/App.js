import React from 'react';
import './App.css';

import { Button, Form, FormGroup, Label, Input, Footer }
  from 'reactstrap';

function App() {
  return (
    <Form className="box">
      <Form className="login-form">
        
        <h1 className="text-center">
          <span className="font-weight-bold">ReFOLIO</span>
        </h1>
        
        <h2 className="text-center">Welcome</h2>

        <div className="text-center pt-3">
        don't have an account? <span className="font-weight-bold">Sign up for free</span>
        </div>    

        <FormGroup>
          <Input type="email" placeholder="Email"/>
        </FormGroup> 

        <FormGroup>
          <Input type="password" placeholder="Password"/>
        </FormGroup> 

        <Button className="btn-lg btn-dark btn-block">
          Log in
        </Button>

      </Form>
    </Form>

  );
}

export default App;
