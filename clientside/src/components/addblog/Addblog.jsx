import React, { useState } from 'react'
import './Addblog.css'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { postData } from '../../redux/reducers/Blogslice';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



export default function Addblog() {

  const [data,setData]=useState({})
  const dispatch=useDispatch()
  const navigate=useNavigate()


  const dataChange=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setData({...data,[name]:value})
  }
  console.log(data);


  const imageHandler=(event)=>{
    setData({...data,image:event.target.files[0]})
    console.log(data.image);
    
  }

  const handleSubmit=(event)=>{
    event.preventDefault()
    const formdata=new FormData()
    formdata.append('title',data.title)
    formdata.append('content',data.content)
    formdata.append('by',data.by)
    formdata.append('timestamp',data.timestamp)
    formdata.append('image',data.image)

    dispatch(postData(formdata))
  toast.success('blog added seccessfully')
  setTimeout(() => {
    navigate('/viewblog')
  }, 3000);
  }

  

  return (
    <>
    <div className='addblogpage'>
<ToastContainer/>

        <div className='blogadd'>
            <h1 className='addblogh1'>Add Blogs</h1>
           
            <Form className='blogforms' onSubmit={handleSubmit}>
      <Form.Group className=" mb-3" controlId="formGroupEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" onChange={dataChange} name='title' className='inputblog'/>
      </Form.Group>
      <br /><br />
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Content</Form.Label>
        <Form.Control type="text" onChange={dataChange} name='content'className='inputblog'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>By</Form.Label>
        <Form.Control type="text" onChange={dataChange} name='by'className='inputblog'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Timestamp</Form.Label>
        <Form.Control type="text" onChange={dataChange} name='timestamp'className='inputblog'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Image</Form.Label>
        <Form.Control type="file" onChange={imageHandler} name='image' className='inputblog'/>
      </Form.Group>
      <div className='addblogbutton'>
      <button  type='submit' className='buttonblog'>submit</button>
      </div>
    </Form>

    </div>
    </div>
    </>
  )
}
