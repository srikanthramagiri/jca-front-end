import React, { useRef, useState,useEffect } from "react";
import { Container, Dropdown, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom"

const Securityquestion = () => {
    const navigate = useNavigate();   
    const [value, setValue] = useState();
    const [answer, setAnswer] = useState();
    const submitsecurityq = () => {
        const valid = false;
        switch(value) {
            case "1": {
              if(answer === "123456789") {
                alert("validated")
                navigate("/jcaapp")
              } else {
                alert("Wrong Answer provided")
              }
              break;
            }
            case "2": {
                if(answer === 'company') {
                    alert("validated")
                   
                  } else {
                    alert("Wrong Answer provided")
                  }
              break;
                }
            case "3": {
                if(answer === 'USA') {
                    alert("validated")
                    
                  } else {
                    alert("Wrong Answer provided")
                  }
            break;
                }
            default:
              
          }
    }
    return(
        <>
        <Container>
        <Row>
          <Col> <h4> Securityquestion</h4>
        <div>
        <Form.Select aria-label="Select Security question" onChange={(e)=> {setValue(e.target.value)}}>
      <option>Select one security question</option>
      <option value="1">When is your first phone number ?</option>
      <option value="2">What is your first company you have worked ?</option>
      <option value="3">what is you birth place ?</option>
    </Form.Select>
        </div></Col>
        <Form.Group className="mb-3" >
                  {/* <Form.Label>Answer</Form.Label> */}
                  <Form.Control type="text" placeholder="Type answer here" onChange={(e)=>{setAnswer(e.target.value)}}/>
                </Form.Group>
         </Row>
         {/* <Button variant="primary" onClick={}>Submit</Button> */}
         <Button variant="primary" onClick={()=>{submitsecurityq()}}>Submit</Button>
         </Container>
        </>
    )
}
export default Securityquestion