import React, { useRef, useState, useEffect } from "react";
import { Container, Dropdown, Row, Col, Form, Button , InputGroup} from "react-bootstrap";
import Loading from "./Loading";
import axios from "axios";

const JcaApp = () => {
  const [value, setValue] = useState();
  const [answer, setAnswer] = useState();
  const [error, setError] = useState('')
  const [encryptedText, setEncryptedText] = useState('')
  const [plaintext, setPlaintext] = useState('')
  const [options, setOptions] = useState([])
// if(true) {
//     return(<Loading />)
// }
useEffect(()=>{

  axios.get(`http://localhost:9090/GetCryptograhicTypes`)
  .then(response => {
    // handle successful response
    setOptions(response.data);
  })
  .catch(error => {
    // handle error
    console.error(error);
  });

},[])
const fetchEncrypted =  (value)=> {
if(value === '1.Symmetric Key Cryptography') {
  axios.get(`http://localhost:9090/SymmetricKeyCryptography?option=1&inputMsg=${plaintext}`)
  .then(response => {
    // handle successful response
    setEncryptedText(response.data);
  })
  .catch(error => {
    // handle error
    console.error(error);
  });
}
if(value === '2.Hashing') {
  axios.get(`http://localhost:9090/Hashing?option=1&inputMsg=${plaintext}`)
  .then(response => {
    // handle successful response
    setEncryptedText(response.data);
  })
  .catch(error => {
    // handle error
    console.error(error);
  });
}
if(value === '3.Asymmetric Key Cryptography') {
  axios.get(`http://localhost:9090/AsymmetricKeyCryptography?option=1&inputMsg=${plaintext}`)
  .then(response => {
    // handle successful response
    setEncryptedText(response.data);
  })
  .catch(error => {
    // handle error
    console.error(error);
  });
}
if(value === '4.Base 64 Encoding') {
  axios.get(`http://localhost:9090/Base64Encoding?option=1&inputMsg=${plaintext}`)
  .then(response => {
    // handle successful response
    setEncryptedText(response.data);
  })
  .catch(error => {
    // handle error
    console.error(error);
  });
}

}
const plaintextHandler = (value) => {
if(value.match(/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]*$/)) {
  setPlaintext(value)
} else {
  setError('not valid');
}
}
  return (
    <>
      <Container>
        <Row>
          <Col>
          <div className="jcaApp">
          <h4>Welcome to JCA(Java Cryptographic application) </h4>
          </div>
          <Form.Select aria-label="Type of encryption" onChange={(e)=> {setValue(e.target.value)}}>
      <option>Select</option>
      {options.map((item) => {
        return (<option value={item}>{item}</option>)
      })}
    </Form.Select>
          </Col>
        </Row>{" "}
        <div className="plaintext">
        <Row>
            
            <Col>
            <InputGroup>
        <InputGroup.Text>Plain Text</InputGroup.Text>
        <Form.Control as="textarea"  aria-label="With textarea" onChange={(e)=> {plaintextHandler(e.target.value)}}/>

      </InputGroup>
      <div style={{color: 'red'}}> {error} </div>
            </Col>
           
        </Row>
        </div>
        <div className="jcasubmit">
        <Row>
            <Col>
            <Button variant="primary" disabled= {!value ? true : false} onClick={()=> {fetchEncrypted(value)}}>Submit</Button>
           {!value ? (<div style={{color: 'red'}}>please select encrypt option</div>) : null}
            </Col>
        </Row>
        </div>
        <Row>
            <div className="encrypted">
            <Col>
            <InputGroup>
        <InputGroup.Text>{value} Encrypted Value:</InputGroup.Text>
        <Form.Control as="textarea" value={encryptedText}  aria-label="With textarea" />
      </InputGroup>
            </Col>
            </div>
        </Row>
      </Container>
    </>
  );
};
export default JcaApp;
