import React, { useEffect, useState } from "react";
import "./Plantsadd.css";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Plantsadd() {
  const token = sessionStorage.getItem("token");
const navigate=useNavigate()
    const[item,Setitem]=useState({})

    const dataChange=(event)=>{
      const name=event.target.name;
      const value=event.target.value;
      Setitem({...item,[name]:value})
    }
    console.log(item);

    const imageHandler=(event)=>{
      Setitem({...item,image:event.target.files[0]})
      console.log(item.image);
    }

    const handleSubmit=(event)=>{
      event.preventDefault()

      const formdata=new FormData();
      formdata.append('name',item.name)
      formdata.append('type',item.type)
      formdata.append('description',item.description)
      formdata.append('image',item.image)
  axios.post('http://localhost:1001/api/plants/plantadd',formdata,{
    headers:{Authorization:`Bearer ${token}`},
  })
  .then((response)=>{
    console.log(response);
    toast.success(response.data.message)
    setTimeout(() => {
      navigate('/plantsview')
    }, 3000);
  })
  .catch((error)=>{
    console.log(error);

  })
    }



  return (
    <>
      <div className="plantsaddpage">
        <ToastContainer />
        <div className="plantsadd">
          <h1 className="plantsaddh1">Add Plants</h1>

          <Form
            className="plantforms"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <Form.Group className=" mb-3" controlId="formGroupEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" onChange={dataChange} name="name" className="plantaddinput"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Type</Form.Label>
              <Form.Control type="text" onChange={dataChange} name="type" className="plantaddinput"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                onChange={dataChange}
                name="description"
                className="plantaddinput"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" onChange={imageHandler} name="image" className="plantaddinput"/>
            </Form.Group>
            <div className="plantsaddbutton">
              <button type="submit" className="buttonplant">submit</button>
            </div>
          </Form>
        </div>
      </div>

      {/* <div className="plantaddpage">
        <div className="plant">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <h1>Plants Add</h1>
            <label htmlFor="">Name</label>
            <br />
            <input type="text" onChange={dataChange} name="name" />
            <br />
            <br />

            <label htmlFor="">Type</label>
            <br />
            <input type="text" onChange={dataChange} name="type" />
            <br />
            <br />

            <label htmlFor="">Description</label>
            <br />
            <input type="text" onChange={dataChange} name="description" />
            <br />
            <br />

            <label htmlFor="">Image</label>
            <br />
            <input type="file" onChange={imageChange} name="image" />
            <br />
            <br />

            <div className="buttonclass">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div> */}
    </>
  );
}
