import  React, { useState }  from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
//import PropTypes from "prop-types";

// SPOOF ADMIN CREDENTIALS
const adminCred = [{
    username: "Admin",
    password: "Password"
}]

localStorage.setItem("admin", JSON.stringify(adminCred));

const schema = yup.object().shape({
    username: yup
        .string()
        .min(4, "Firstname must be minimum 4 characters")
        .required("First name is required"),
    password: yup
        .string()
        .min(8, "Password must be minimum 8 characters")
        .required("Last name is required")
});





function ContactForm(){

    const { register, handleSubmit, error} = useForm({
        validationSchema: schema 
    });
    const { authenticated, setAuthenticated} = useState(false);

    let history = useHistory();



    // GET FORM VALUES
function onSubmit(data){
    let newArray = [];
    newArray.push(data);
   
    if(newArray[0].password === adminCred[0].password && newArray[0].username === adminCred[0].username){
        history.push('/dashboard');
    }
}


    return(
        <>
        <Form  onSubmit={handleSubmit(onSubmit)}>
            <Form.Label>Username</Form.Label>
                <input type="text" name="username" ref={register}></input>
                {error && <p>test</p> }

            <Form.Label>Password</Form.Label>
                <input type="text" name="password" ref={register}></input>


            <Button type="submit">SignIn</Button>
           
        </Form>
        
        </>
    );
}

export default ContactForm;