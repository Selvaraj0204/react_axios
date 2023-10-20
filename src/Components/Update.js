import React, { useEffect, useState } from "react";
import { Form, Button, Checkbox } from "semantic-ui-react";
import { API_URL } from "../constants/URL";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Update() {

    const [firstName, setfirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [checked, setchecked] = useState(false);
    const [id, setId] = useState('');
    const navigate=useNavigate();

    const updateUser=async()=>{
        await axios.put(API_URL + id,{
            firstName,
            LastName,
            checked
        });
        alert('Your details have been updated');
        navigate('/read');
    }


    useEffect(() => {
        setId(localStorage.getItem('id'));
        setfirstName(localStorage.getItem('firstName'));
        setLastName(localStorage.getItem('LastName'));
        setchecked(localStorage.getItem('checked'));
    }, []);
    return (
        <Form className="form">
            <Form.Field>
                <label style={{ marginRight: "5px" }}>First Name</label>
                <input value={firstName} onChange={e => setfirstName(e.target.value)} placeholder="Enter First Name" />
            </Form.Field><br />
            <Form.Field>
                <label style={{ marginRight: "5px" }}>Last Name</label>
                <input value={LastName} onChange={e => setLastName(e.target.value)} placeholder="Enter Last Name" />
            </Form.Field><br />
            <Form.Field>
                <Checkbox checked={checked} onChange={() => setchecked(!checked)} label="Agree the terms & conditions" />
            </Form.Field><br />
            <Button onClick={updateUser}>Submit</Button>
        </Form>
    );
}

export default Update;