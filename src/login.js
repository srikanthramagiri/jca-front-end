import React, { useRef, useState,useEffect,   } from "react";
import { useNavigate } from "react-router-dom"
import { Button, Form, Col, Row, Container,  } from "react-bootstrap";
import {
    loadCaptchaEnginge,
    LoadCanvasTemplate,
    validateCaptcha,
  } from "react-simple-captcha";
  import validator from 'validator'

const Login = () => {
    const captchaRef1 = useRef(null);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [validCaptcha, setValidCaptcha] = useState(false)
    const [login, setLogin] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const validate = (value) => {
 
      if (validator.isStrongPassword(value, {
        minLength: 8, minLowercase: 1,
        minUppercase: 1, minNumbers: 1, minSymbols: 1
      })) {
        setPassword(value)
        setErrorMessage('')
      } else {
        setErrorMessage('Not valid Password')
      }
    }
    // const history = useHistory
    const navigate = useNavigate();   

   
    const checklogin = () => {
        if(username === 'admin' && password === 'Admin@123') {
            setLogin(true)
            return true
        } else {
            setLogin(false)
            return false
        }
    }
const handleSubmit  =() =>{
    
  if(handleCaptcha1() && checklogin()) {
    alert('login success')
    // history.push('/Securityquestion')
    sessionStorage.setItem('token', JSON.stringify({login: 'admin'}));
    navigate('/Securityquestion')
  } else {
    alert('login failure')
    if(!username && !password && !login) {
        alert('enter Valid Username and Password')
    }
    if(!validCaptcha) {
        alert('enter Valid Captcha')
    }
  }
   
}
useEffect(() => {
    loadCaptchaEnginge(6);
  },[]);
  const handleCaptcha1 = () => {
    const captcha = captchaRef1.current.value;
    if (validateCaptcha(captcha)) {
        setValidCaptcha(true)
        return true
    } else {
        setValidCaptcha(false)
        return false
    }

  };
  return (
    <div class="login">
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <div class="login-div">
              <h3 className="loginheading">Login</h3>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setUsername(e.target.value)}}/>
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" onChange={(e)=>{validate(e.target.value)}}/>
                  <span style={{color: 'red'}}>{errorMessage}</span>
                </Form.Group>
               
                <div className="capctha">
                <LoadCanvasTemplate />
                <input ref={captchaRef1}  type="text" />
                </div>
               
                <Button variant="primary" onClick={handleSubmit}>Submit</Button>
              </Form>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
