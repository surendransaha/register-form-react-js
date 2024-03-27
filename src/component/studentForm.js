import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addStudentList } from "../redux/action";
import { useNavigate } from 'react-router-dom';

import "../App.css";

import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  FloatingLabel,
} from "react-bootstrap";

const StendentForm = () => {


  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    birthMonth: '',
    birthDay: '',
    birthYear: '',
    gender: '',
    streetAddressLine1: '',
    streetAddressLine2: '',
    city: '',
    stateProvince: '',
    postalCode: '',
    email: '',
    mobileNumber: '',
    phoneNumber: '',
    workNumber: '',
    company: '',
    courses: '',
    additionalComments: '',
  });

  const [validated, setValidated] = useState(false);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const dispatch = useDispatch();
  const history = useNavigate();

  const { loading, students, error } = useSelector((state) => state.student);

  useEffect(() => {
    console.log("students", students);

    // dispatch()
  }, []);


  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }


    setValidated(true);

      event.preventDefault();
  
  
      dispatch(addStudentList(formData))
  

    if(form.checkValidity()){

      history('/list')

    }


    
    
  };

  if(loading) return (<p>loading ...</p>);


  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col col-lg-8 container-custom">
          <div className="card">
            <Form  noValidate validated={validated} onSubmit={handleSubmit}>
              <div className="card-header">
                <header className="header">
                  <h1>Registration Form</h1>
                  <p>Fill out the form carefully for registration</p>
                </header>
              </div>

              <div className="card-body">
                <Container>
                  <Form.Group
                    controlId="StudentName"
                    className="form-header-section"
                  >
                    <Form.Label className="form-label-top">
                      Student Name
                    </Form.Label>

                    <Row>
                      <Col>
                        <Form.Control type="text" placeholder="" name="firstName" value={formData.firstName}
                  onChange={handleInputChange} required/>
                        <Form.Label>First Name </Form.Label>
                        {/* <Form.Control.Feedback type="invalid"> required.</Form.Control.Feedback> */}
                      </Col>

                      <Col>
                        <Form.Control type="text" placeholder="" name="middleName" value={formData.middleName}
                  onChange={handleInputChange} />
                        <Form.Label>Middle Name</Form.Label>
                      </Col>

                      <Col>
                        <Form.Control type="text" placeholder="" name="lastName" value={formData.lastName}
                  onChange={handleInputChange} required/>
                        <Form.Label>Last Name </Form.Label>
                        {/* <Form.Control.Feedback type="invalid"> required.</Form.Control.Feedback> */}
                      </Col>
                    </Row>
                  </Form.Group>

                  <Form.Group
                    controlId="StudentName"
                    className="form-header-section"
                  >
                    <Row>
                      <Col>
                        <Form.Label className="form-label-top">
                          Birth Date
                        </Form.Label>

                        <Row>
                          <Col>
                            <Form.Select aria-label="Default select example" name="birthMonth" value={formData.birthMonth}
                  onChange={handleInputChange} required>
                              <option value="">Please select a month</option>
                              <option value="1">January</option>
                              <option value="2">February</option>
                              <option value="3">March</option>
                              <option value="4">April</option>
                              <option value="5">May</option>
                              <option value="6">June</option>
                              <option value="7">July</option>
                              <option value="8">August</option>
                              <option value="9">September</option>
                              <option value="10">October</option>
                              <option value="11">November</option>
                              <option value="12">December</option>
                            </Form.Select>
                            <Form.Label>Month</Form.Label>
                            {/* <Form.Control.Feedback type="invalid"> required.</Form.Control.Feedback> */}
                          </Col>

                          <Col>
                            <Form.Select aria-label="Default select example" name="birthDay" value={formData.birthDay}
                  onChange={handleInputChange} required>
                              <option value="">Please select a day</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                              <option value="11">11</option>
                              <option value="12">12</option>
                              <option value="13">13</option>
                              <option value="14">14</option>
                              <option value="15">15</option>
                              <option value="16">16</option>
                              <option value="17">17</option>
                              <option value="18">18</option>
                              <option value="19">19</option>
                              <option value="20">20</option>
                              <option value="21">21</option>
                              <option value="22">22</option>
                              <option value="23">23</option>
                              <option value="24">24</option>
                              <option value="25">25</option>
                              <option value="26">26</option>
                              <option value="27">27</option>
                              <option value="28">28</option>
                              <option value="29">29</option>
                              <option value="30">30</option>
                              <option value="31">31</option>
                            </Form.Select>
                            <Form.Label>Day</Form.Label>
                            {/* <Form.Control.Feedback type="invalid"> required.</Form.Control.Feedback> */}
                          </Col>

                          <Col>
                            <Form.Select aria-label="Default select example" name="birthYear" value={formData.birthYear}
                  onChange={handleInputChange} required>
                              <option value="">Please select a year</option>
                              <option value="2024">2024</option>
                              <option value="2023">2023</option>
                              <option value="2022">2022</option>
                              <option value="2021">2021</option>
                              <option value="2020">2020</option>
                              <option value="2019">2019</option>
                              <option value="2018">2018</option>
                              <option value="2017">2017</option>
                              <option value="2016">2016</option>
                              <option value="2015">2015</option>
                              <option value="2014">2014</option>
                              <option value="2013">2013</option>
                              <option value="2012">2012</option>
                              <option value="2011">2011</option>
                              <option value="2010">2010</option>
                              <option value="2009">2009</option>
                              <option value="2008">2008</option>
                              <option value="2007">2007</option>
                              <option value="2006">2006</option>
                              <option value="2005">2005</option>
                              <option value="2004">2004</option>
                              <option value="2003">2003</option>
                              <option value="2002">2002</option>
                              <option value="2001">2001</option>
                              <option value="2000">2000</option>
                              <option value="1999">1999</option>
                              <option value="1998">1998</option>
                              <option value="1997">1997</option>
                              <option value="1996">1996</option>
                              <option value="1995">1995</option>
                              <option value="1994">1994</option>
                              <option value="1993">1993</option>
                              <option value="1992">1992</option>
                              <option value="1991">1991</option>
                              <option value="1990">1990</option>
                              <option value="1989">1989</option>
                              <option value="1988">1988</option>
                              <option value="1987">1987</option>
                              <option value="1986">1986</option>
                              <option value="1985">1985</option>
                              <option value="1984">1984</option>
                              <option value="1983">1983</option>
                              <option value="1982">1982</option>
                              <option value="1981">1981</option>
                              <option value="1980">1980</option>
                              <option value="1979">1979</option>
                              <option value="1978">1978</option>
                              <option value="1977">1977</option>
                              <option value="1976">1976</option>
                              <option value="1975">1975</option>
                              <option value="1974">1974</option>
                              <option value="1973">1973</option>
                              <option value="1972">1972</option>
                              <option value="1971">1971</option>
                              <option value="1970">1970</option>
                              <option value="1969">1969</option>
                              <option value="1968">1968</option>
                              <option value="1967">1967</option>
                              <option value="1966">1966</option>
                              <option value="1965">1965</option>
                              <option value="1964">1964</option>
                              <option value="1963">1963</option>
                              <option value="1962">1962</option>
                              <option value="1961">1961</option>
                              <option value="1960">1960</option>
                              <option value="1959">1959</option>
                              <option value="1958">1958</option>
                              <option value="1957">1957</option>
                              <option value="1956">1956</option>
                              <option value="1955">1955</option>
                              <option value="1954">1954</option>
                              <option value="1953">1953</option>
                              <option value="1952">1952</option>
                              <option value="1951">1951</option>
                              <option value="1950">1950</option>
                              <option value="1949">1949</option>
                              <option value="1948">1948</option>
                              <option value="1947">1947</option>
                              <option value="1946">1946</option>
                              <option value="1945">1945</option>
                              <option value="1944">1944</option>
                              <option value="1943">1943</option>
                              <option value="1942">1942</option>
                              <option value="1941">1941</option>
                              <option value="1940">1940</option>
                              <option value="1939">1939</option>
                              <option value="1938">1938</option>
                              <option value="1937">1937</option>
                              <option value="1936">1936</option>
                              <option value="1935">1935</option>
                              <option value="1934">1934</option>
                              <option value="1933">1933</option>
                              <option value="1932">1932</option>
                              <option value="1931">1931</option>
                              <option value="1930">1930</option>
                              <option value="1929">1929</option>
                              <option value="1928">1928</option>
                              <option value="1927">1927</option>
                              <option value="1926">1926</option>
                              <option value="1925">1925</option>
                              <option value="1924">1924</option>
                              <option value="1923">1923</option>
                              <option value="1922">1922</option>
                              <option value="1921">1921</option>
                              <option value="1920">1920</option>
                            </Form.Select>
                            <Form.Label>Year</Form.Label>
                            {/* <Form.Control.Feedback type="invalid"> required.</Form.Control.Feedback> */}
                          </Col>
                        </Row>
                      </Col>

                      <Col>
                        <Form.Label className="form-label-top">
                          Gender
                        </Form.Label>

                        <Row>
                          <Col>
                            <Form.Select aria-label="Default select example" name="gender" value={formData.gender}
                  onChange={handleInputChange} required>
                              <option value="">Please Select</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="N/A">N/A</option>
                            </Form.Select>
                            {/* <Form.Control.Feedback type="invalid"> required.</Form.Control.Feedback> */}
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Form.Group>

                  <Form.Group
                    controlId="StudentName"
                    className="form-header-section"
                  >
                    <Form.Label className="form-label-top">
                      Street Address
                    </Form.Label>

                    <Row>
                      <Col>
                        <Form.Control type="text" placeholder="" name="streetAddressLine1" value={formData.streetAddressLine1}
                  onChange={handleInputChange}  required/>
                        <Form.Label>Street Address Line</Form.Label>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <Form.Control type="text" placeholder="" name="streetAddressLine2" value={formData.streetAddressLine2}
                  onChange={handleInputChange} />
                        <Form.Label>Street Address Line 2</Form.Label>
                      </Col>
                    </Row>

                    <Row>

                    <Col>
                        <Form.Control type="text" placeholder="" name="city" value={formData.city}
                  onChange={handleInputChange} required />
                        <Form.Label>City</Form.Label>
                      </Col>

                      <Col>
                        <Form.Control type="text" placeholder="" name="stateProvince" value={formData.stateProvince}
                  onChange={handleInputChange} required />
                        <Form.Label>State / Province</Form.Label>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <Form.Control type="text" placeholder="" name="postalCode" value={formData.postalCode}
                  onChange={handleInputChange} required />
                        <Form.Label>Postal / Zip Code</Form.Label>
                      </Col>
                    </Row>
                  </Form.Group>

                  <Form.Group
                    controlId="StudentName"
                    className="form-header-section"
                  >
                    <Row>
                      <Col>
                        <Form.Label className="form-label-top">
                          Student E-mail
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="ex: myname@example.com"
                          name="email" value={formData.email}
                  onChange={handleInputChange}
                  required
                        />
                        <Form.Label>example@example.com</Form.Label>
                      </Col>

                      <Col>
                        <Form.Label className="form-label-top">
                          Mobile Number
                        </Form.Label>
                        <Form.Control type="text" placeholder="" name="mobileNumber" value={formData.mobileNumber}
                  onChange={handleInputChange} />
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <Form.Label className="form-label-top form-header-section">
                          Phone Number
                        </Form.Label>
                        <Form.Control type="text" placeholder="" name="phoneNumber" value={formData.phoneNumber}
                  onChange={handleInputChange} />
                      </Col>

                      <Col>
                        <Form.Label className="form-label-top form-header-section">
                          Work Number
                        </Form.Label>
                        <Form.Control type="text" placeholder="" name="workNumber" value={formData.workNumber}
                  onChange={handleInputChange}/>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <Form.Label className="form-label-top form-label-top form-header-section">
                          Company
                        </Form.Label>
                        <Form.Control type="text" placeholder="" name="company" value={formData.company}
                  onChange={handleInputChange} />
                      </Col>

                      <Col>
                        <Form.Label className="form-label-top form-label-top form-header-section">
                          Courses
                        </Form.Label>
                        <Form.Select aria-label="Default select example" name="courses" value={formData.courses}
                  onChange={handleInputChange}>
                          <option value="">Please Select</option>
                          <option value="Windows 8">Windows 8</option>
                          <option value="Introduction to Linux">
                            Introduction to Linux
                          </option>
                          <option value="English 101">English 101</option>
                          <option value="English 102">English 102</option>
                          <option value="Creative Writing 1">
                            Creative Writing 1
                          </option>
                          <option value="Creative writing 2">
                            Creative writing 2
                          </option>
                          <option value="History 101">History 101</option>
                          <option value="History 102">History 102</option>
                          <option value="Math 101">Math 101</option>
                          <option value="Math 102">Math 102</option>
                        </Form.Select>
                      </Col>
                    </Row>
                  </Form.Group>

                  <Form.Group
                    controlId="StudentName"
                    className="form-header-section"
                  >
                    <Row>
                      <Col>
                        <Form.Label className="form-label-top">
                          Additional Comments
                        </Form.Label>

                        <Row>
                          <Col>
                            <FloatingLabel controlId="floatingTextarea2">
                              <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: "150px" }}
                                name="additionalComments" value={formData.additionalComments}
                  onChange={handleInputChange}
                              />
                            </FloatingLabel>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Form.Group>
                </Container>
              </div>

              <div className="card-footer text-body-secondary">
                <div className="bottom-card">
                  <Button  type="submit" variant="success submt-button" size="lg">
                    Submit
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StendentForm;
