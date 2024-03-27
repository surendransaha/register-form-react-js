import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Button, Card, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const StendentList = () => {

    const { loading, students, error } = useSelector((state) => state.student);
    const history = useNavigate();

    useEffect(() => {
        console.log("students", students);
    
        // dispatch()
      }, []);


      const handleClick = () => {

        history('/')

      }



    return (<>


<div className="container">
      <div className="row justify-content-md-center">
        <div className="col col-lg-8 container-custom">

        {
  students && students.length > 0 ? (
    students.map((value, index) => (
      <Card key={index} style={{ marginTop: "10px" }}>
        <Card.Header>
          <Card.Title>{value.firstName+" "+value.middleName+ " "+value.lastName}</Card.Title>
        </Card.Header>
        <Card.Body>
          <ListGroup>

            <ListGroup.Item>Date of Birth: {value.birthDay+"/"+value.birthMonth+"/"+value.birthYear}</ListGroup.Item>
            
            <ListGroup.Item>Gender: {value.gender}</ListGroup.Item>

            <ListGroup.Item>Address : { 
            value.streetAddressLine1 +", "+value.streetAddressLine2+ ", "+value.city+", "+value.stateProvince+ ", "+value.postalCode
            }</ListGroup.Item>

            <ListGroup.Item>Email : {value.email}</ListGroup.Item>

            <ListGroup.Item>Mobile Number : {value.mobileNumber}</ListGroup.Item>

            <ListGroup.Item>Phone Number : {value.phoneNumber}</ListGroup.Item>

            <ListGroup.Item>Work Number : {value.workNumber}</ListGroup.Item>

            <ListGroup.Item>Company : {value.company}</ListGroup.Item>

            <ListGroup.Item>Courses : {value.courses}</ListGroup.Item>

            <ListGroup.Item>Comments : {value.additionalComments}</ListGroup.Item>

          </ListGroup>
        </Card.Body>
      </Card>
    ))
  ) : (

    <Card>
        <Card.Body>
            <div>No data available</div>
        </Card.Body>
      </Card>
  )
}


            



<br/>
    <Button variant="primary" onClick={handleClick}>Back</Button>

    </div>
      </div>
    </div>
    
    </>);


}


export default StendentList;