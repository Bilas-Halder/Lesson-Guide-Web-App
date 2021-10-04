import React, { useEffect, useState } from 'react';
import "./SignIn.css";
import { FloatingLabel, Form } from 'react-bootstrap';

const SignIn = () => {
    // for Signed in or not
    const [signedIn, setSignedIn] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        // getting info from localstorage
        const info = localStorage.getItem("signInInfo");
        if (info) {
            setSignedIn(1);

        }
        const infoObj = JSON.parse(info);
        setName(infoObj?.Name);
        console.log(infoObj);
    }, [])

    const data = {};
    const objKey = ["Name", "Expart", "Email", "PassWord"];
    // for setting as object key in data object

    const submitBtnHandler = () => {
        const allInputs = document.querySelectorAll(".form-control");
        for (let i = 0; i < allInputs.length; i++) {
            const input = allInputs[i];
            data[objKey[i]] = input.value;
            // setting data key and value
        }
        localStorage.setItem("signInInfo", JSON.stringify(data));
        // setting on localStorage as a string
        setSignedIn(1);

        setName(data?.Name);
    }

    return (
        <div className="d-flex justify-content-center" style={{ marginTop: "6rem", height: "100%", width: "100%" }}>
            <div style={{ textAlign: "center" }} className="signin-container">
                {
                    !signedIn ?
                        <>
                            <h2 className="mt-5">Sign In as a Trainer</h2>

                            <FloatingLabel
                                controlId="floatingInput"
                                label="Full Name"
                                className="mx-5 mt-4 mb-3"
                            >
                                <Form.Control type="text" placeholder="name@example.com" />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingInput"
                                label="Expert In"
                                className="mx-5 my-3"
                            >
                                <Form.Control type="text" placeholder="name@example.com" />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="mx-5 my-3"
                            >
                                <Form.Control type="email" placeholder="name@example.com" />
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingPassword"
                                className="mx-5 my-3" label="Password">
                                <Form.Control type="password" placeholder="Password" />
                            </FloatingLabel>

                            <button className="submit-btn" onClick={submitBtnHandler}>Submit</button>
                        </>
                        :
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <h1 > Mr. {name}<br /> You are Signed In. <br />Thank You.</h1>
                        </div>
                }
            </div>

        </div>
    );
};

export default SignIn;