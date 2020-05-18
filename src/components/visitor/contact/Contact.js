import  React  from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { PostContact } from "../../../constants/MessageFunctions";


// ADD FORM VALIDATION
// TYPE CHECKING




// GET FORM VALUES
function onSubmit(data){
    PostContact(data);
}


function ContactForm(){

    const { register, handleSubmit} = useForm({});
    return(
        <>
        <Form  onSubmit={handleSubmit(onSubmit)}>
            <Form.Label>Name</Form.Label>
            <input type="text" name="name" ref={register}></input>

            <Form.Label>Email</Form.Label>
            <input type="text" name="email" ref={register}></input>

            <Form.Label>MSG</Form.Label>
            <textarea type="text" name="message" placeholder="Message..." ref={register}></textarea>

            <Button type="submit">Send</Button>
           
        </Form>
        <button >Cancel</button>
        </>
    );
}

export default ContactForm;