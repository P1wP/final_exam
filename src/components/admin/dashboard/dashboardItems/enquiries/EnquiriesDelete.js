import  React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import ErrorMessage from "../../../formValidation/ErrorMessage";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BASE_URL, headers } from "../../../../../constants/API";


const schema = yup.object().shape({
    id: yup
        .string()
        .required("Id did not match"),

});


function EnquiriesDelete({msgId}){
    
    const [ disabled, setDisabled ] = useState(true);
    const { register, handleSubmit, errors} = useForm({
        validationSchema: schema    
    });

    function onSubmit(data){
        let id = data.id;
        const url = BASE_URL + "enquiries/" + id;
        const options = { headers, method: "DELETE" };
        fetch(url, options);
    }
    
    function CheckValue(e){
        
        if(e.target.value === msgId){
            setDisabled(false);
            return
        }
        //ELSE
        setDisabled(true);
    }
    
    return(
        <Form className="deleteMsg" onSubmit={handleSubmit(onSubmit)}>
            <Form.Text className="deleteMsg__info"> 
                <h4 className="deleteMsg__info--heading">Danger Zone</h4>
                <p className="deleteMsg__info--id">ID: {msgId}</p>
            </Form.Text>
          <Form.Group className="deleteMsg__id">
                <Form.Control   className="deleteMsg__id--input" 
                                name="id" 
                                placeholder="Establishment id"
                                onChange = {CheckValue} 
                                ref={register} />
                {errors.id && <ErrorMessage>{errors.id.message}</ErrorMessage>}
            </Form.Group>
            {disabled ? (
                    <Button className="deleteMsg__btn" type="submit" disabled>Delete</Button>
                ):(
                    <Button className="deleteMsg__btn" type="submit">Delete</Button>    
                )}
        </Form>
    );
}

export default EnquiriesDelete;