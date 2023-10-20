import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import { API_URL } from "../constants/URL";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Read() {

    const [apiData, setapiData] = useState([]);
    const navigate=useNavigate();

    const updateUser=({firstName,LastName,checked,id})=>{
        localStorage.setItem('id',id);
        localStorage.setItem('firstName',firstName);
        localStorage.setItem('LastName',LastName);
        localStorage.setItem('checked',checked);
        navigate('/update')
    }


    const deleteUser=async(id)=>{
        await axios.delete(API_URL + id); 
        window.confirm("do you want to delete");
        callGetApi()
        
    }

    const callGetApi = async () => {
        const resp = await axios.get(API_URL);
        setapiData(resp.data);
    }

    useEffect(() => {
        callGetApi();
    }, []);

    return (
        <><Table singleLine className="table">
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>
                        First Name
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                        Last Name
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                        Checked
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                        Delete
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                        Update
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {apiData.map(data => (
                    <Table.Row key={data.id}>
                        <Table.Cell>
                            {data.firstName}
                        </Table.Cell>
                        <Table.Cell>
                            {data.LastName}
                        </Table.Cell>
                        <Table.Cell>
                            {data.checked ? "checked" : "not checked"}
                        </Table.Cell>
                        <Table.Cell>
                            <Button onClick={() => deleteUser(data.id)}>Delete</Button>
                        </Table.Cell>
                        <Table.Cell>
                            <Button onClick={()=>updateUser(data)}>Update</Button>
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
        <Link to="/create">back to create</Link></>
    );
    
}

export default Read;