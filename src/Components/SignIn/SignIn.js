import React, { useEffect, useState } from 'react';
import "./SignIn.css";
import { FloatingLabel, Form } from 'react-bootstrap';

const SignIn = () => {
    // for Signed in or not
    const [signedIn, setSignedIn] = useState(0);
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const heightStyle = {
        height: (window.innerHeight * 85 / 100) + "px",
        marginTop: "6rem",
        width: "100%"
    }

    useEffect(() => {
        // getting info from localstorage
        const info = localStorage.getItem("signInInfo");
        if (info) {
            setSignedIn(1);

        }
        const infoObj = JSON.parse(info);
        setName(infoObj?.name);
        setGender(infoObj?.gender);
        console.log(infoObj);
    }, [])

    const data = {};
    // for setting as object key in data object

    const submitBtnHandler = () => {

        const e = document.getElementById("gender");
        const gen = e.options[e.selectedIndex].text;
        data["gender"] = gen;

        const allInputs = document.querySelectorAll(".form-control");
        for (let i = 0; i < allInputs.length; i++) {
            const input = allInputs[i];

            data[input.id] = input.value;
            console.log(input.id, input.value);
            // setting data key and value
        }
        localStorage.setItem("signInInfo", JSON.stringify(data));
        // setting on localStorage as a string
        setSignedIn(1);

        setName(data?.name);
        setGender(data?.gender);
    }

    return (
        <div className="d-flex justify-content-center align-items-center" style={heightStyle}>
            <div style={{ textAlign: "center" }} className="signin-container">
                {
                    !signedIn ?
                        <>
                            <h2 className="mt-5">Sign In as a Trainer</h2>
                            <div className="d-flex justify-content-between w-100 mt-4 mb-4">
                                <div className="w-50">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Full Name"
                                        className="mx-5 mt-4 mb-3 custom-input"
                                    >
                                        <Form.Control type="text" id="name"
                                            placeholder="Name" />
                                    </FloatingLabel>

                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Expert In"
                                        className="mx-5 my-3 custom-input"
                                    >
                                        <Form.Control type="text" id="expert"
                                            placeholder="Expert" />
                                    </FloatingLabel>

                                    <FloatingLabel controlId="floatingPassword"
                                        className="mx-5 my-3 custom-input" label="Password">
                                        <Form.Control type="password" id="password"
                                            placeholder="Password" />
                                    </FloatingLabel>

                                </div>

                                <div className="w-50">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Email address"
                                        className="ms-5 mt-4 mb-3 custom-input"
                                    >
                                        <Form.Control type="email" id="email"
                                            placeholder="Email" />
                                    </FloatingLabel>

                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Contact Number"
                                        className="ms-5 mt-3 mb-3 custom-input"
                                    >
                                        <Form.Control type="text" id="contact"
                                            placeholder="Email" />
                                    </FloatingLabel>

                                    <Form.Select className="custom-input ms-5 py-3" aria-label="Default select example" id="gender">
                                        <option>Gender</option>
                                        <option value="1">Male</option>
                                        <option value="2">Female</option>
                                        <option value="3">Others</option>
                                    </Form.Select>
                                </div>
                            </div>






                            <button className="submit-btn" onClick={submitBtnHandler}>Submit</button>
                        </>
                        :
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <h1 >Hello {
                                gender === "Male" ? <span>Mr. </span> : gender === "Female" ? <span>Ms. </span> : ""
                            } {name}<br /> You are Signed In. <br />Thank You.</h1>
                        </div>
                }
            </div>

        </div>
    );
};

export default SignIn;