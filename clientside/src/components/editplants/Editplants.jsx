import React, { useEffect, useState } from "react";
import "./Editplants.css";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

export default function Editplants() {

    const {id}=useParams()
    const token=sessionStorage.getItem('token')
    const navigate=useNavigate()

    const[item,setItem]=useState({
        name:"",
        type:"",
        description:"",
        image:"",
    })
    
    useEffect(()=>{
        axios.get(`https://plants-96s1.onrender.com/api/plants/singleplant/${id}`)
        .then((response)=>{
            console.log(response);
            setItem(response.data.data)
        })
        .catch((error)=>{
            console.log(error);
            
        })
    },[])

    const dataChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setItem({...item, [name]:value})
    }
    console.log(item);

    const imageChange=(event)=>{
        setItem({...item,image:event.target.files[0]})
        console.log(item.image);
        
    }

    const handleSubmit=(event)=>{
        event.preventDefault()

        const formdata=new FormData()
        formdata.append('name',item.name)
        formdata.append('type',item.type)
        formdata.append('description',item.description)
        formdata.append('image',item.image)

        axios.put(`https://plants-96s1.onrender.com/api/plants/updateplant/${id}`,formdata,{
            headers:{Authorization:`Bearer ${token}`},
        })
        .then((response)=>{
            console.log(response);
            if(response.data.data.modifiedCount===1){
                toast.success(response.data.message)
                
                setTimeout(()=>{
                  navigate('/plantsview')
                },2000)
        
                }
                else{
                  toast.success('already updated')
                }
        })
        .catch((error) => {
            console.log(error);
            toast.error(error.response.data.message)
          });
    }


  return (
    <>
      <div className="plantseditpage">
        <ToastContainer />
        <div className="plantsedit">
          <h1 className="plantsedith1">Edit Plants</h1>

          <Form
            className="plantseditforms"
            onSubmit={handleSubmit}
          >
            <Form.Group className=" mb-3" controlId="formGroupEmail">
              <Form.Label style={{color:'white'}}>Name</Form.Label>
              <Form.Control
                type="text"
                className="plantseditinput"
                value={item.name}
                onChange={dataChange}
                name="name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label style={{color:'white'}}>Type</Form.Label>
              <Form.Control
                type="text"
                className="plantseditinput"
                value={item.type}
                onChange={dataChange}
                name="type"


              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label style={{color:'white'}}>Description</Form.Label>
              <Form.Control
                type="text"
                className="plantseditinput"
                value={item.description}
                onChange={dataChange}
                name="description"

              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label style={{color:'white'}}>Image</Form.Label><br/>
              <img src={`/images/${item.image}`} alt=""  height={'60px'} width={'60px'} />
               
              <Form.Control
                type="file"
                className="plantseditinput"
                onChange={imageChange}
                name="image"

              />

            </Form.Group>
            <div className="plantseditbutton">
              <button className="buttonplantsedit" type="submit">
                submit
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
