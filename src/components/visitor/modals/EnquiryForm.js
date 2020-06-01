import  React, { useState }  from "react";
import {BASE_URL, headers} from "../../../constants/API";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import ErrorMessage from "./ErrorMessage";
import ValidMessage from "./ValidMessage";

// get Yeasterdays date.
const day = 24*60*60*1000;
let yesterday = new Date( Date.now() -day );

const schema = yup.object().shape({
    name: yup
        .string()
        .min(4, "Firstname must be minimum 4 characters")
        .required("First name is required"),
    email: yup
        .string()
        .email("Please enter a valid email")
		.required("Email is required"),
    checkIn: yup
        .date("please select a date")
        // DEFAULT DATE IS +1 USE YEASTERDAYS DATE.
        .min( new Date(yesterday), "Check-in must be today or in the future.")
        .required("CheckIn date is required")
        .typeError("Please select a date"),
        
    checkOut: yup
        .date("please select a date")
        .min( yup.ref("checkIn"), "Check-out can not be before Check-in")
        .typeError("Please select a date")
        
 
        
        
        // https://stackoverflow.com/questions/57985475/yup-how-to-validate-two-dates-which-are-dependent-on-each-other
       
});

function EnquiryForm(id){

    const [validated, setValidated] = useState(false);
    const { register, handleSubmit, errors} = useForm({
        validationSchema: schema 
    });

    function onSubmit(data){
        // SEND DATA TO API
        console.log(id);
        const test = id.value;
        console.log(test);
        const sendData = {
            name: data.name,
            email: data.email,
            establishmentId: id["id"],
            checkIn: data.checkIn.toDateString(),
            checkOut: data.checkOut.toDateString(),
        };

        const url = BASE_URL + "enquiries";
        const options = { headers, method: "POST", body: JSON.stringify(sendData) };
        fetch(url, options)
            .then((r) => r.json())
            .then((j) => console.log(j));

        console.log(sendData);
        setValidated(true);
    }

    // RETURN THIS
    if(!validated){
        return(
            <Form className="enquiryForm" onSubmit={handleSubmit(onSubmit)}>
                
                    <FormGroup className="enquiryForm__name">
                    <Form.Label className="enquiryForm__name--label">Full Name</Form.Label>
                        <input className="enquiryForm__name--input" type="text" name="name" placeholder="Full name" ref={register}></input>
                        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                    </FormGroup>
    
                    <FormGroup className="enquiryForm__email">
                    <Form.Label className="enquiryForm__email--label">Email</Form.Label>
                        <input className="enquiryForm__email--input" type="email" name="email" placeholder="Email" ref={register}></input>
                        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                    </FormGroup>
    
                    <FormGroup className="enquiryForm__date">
                    <Form.Label className="enquiryForm__date--label">Check-In</Form.Label>
                        <input className="enquiryForm__date--input" type="date" name="checkIn" ref={register}></input>
                        {errors.checkIn && <ErrorMessage>{errors.checkIn.message}</ErrorMessage>}
                    </FormGroup>
    
                    <FormGroup className="enquiryForm__date">
                    <Form.Label className="enquiryForm__date--label">Check-out</Form.Label>
                        <input className="enquiryForm__date--input" type="date" name="checkOut" ref={register}></input>
                        {errors.checkOut && <ErrorMessage>{errors.checkOut.message}</ErrorMessage>}
                    </FormGroup>
    
                    <Button className="enquiryForm__btn" type="submit">Send</Button>
               
            </Form>
        );
    }

    // ON VALIDATION RETURN THIS
    return(
        <ValidMessage />
    );
    
}

export default EnquiryForm;