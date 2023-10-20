import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Checkbox } from "semantic-ui-react";
import { API_URL } from "../constants/URL";
import {useNavigate} from 'react-router-dom';

function Create() {
    const [firstName,setfirstName]=useState('');
    const [LastName,setLastName]=useState('');
    const [checked,setchecked]=useState(false);
    const navigate=useNavigate();

    const postData=async()=>{
        await axios.post(API_URL, {firstName,LastName,checked})
        navigate('/read');
    }

    return (
        <Form className="form">
            <Form.Field>
                <label style={{marginRight:"5px"}}>First Name</label>
                <input value={firstName} onChange={e=>setfirstName(e.target.value)} placeholder="Enter First Name"/>
            </Form.Field><br/>
            <Form.Field>
                <label style={{marginRight:"5px"}}>Last Name</label>
                <input value={LastName} onChange={e=>setLastName(e.target.value)} placeholder="Enter Last Name"/>
            </Form.Field><br/>
            <Form.Field>
                <Checkbox checked={checked} onChange={()=>setchecked(!checked)} label="Agree the terms & conditions"/>
            </Form.Field><br/>
            <Button onClick={postData}>Submit</Button>
        </Form>
    );
}
export default Create;