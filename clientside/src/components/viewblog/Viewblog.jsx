import React, { useEffect, useState } from 'react'
import'./Viewblog.css'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

export default function Viewblog() {

  const [data,Setdata]=useState([])
  const token=sessionStorage.getItem('token')

useEffect(()=>{
  axios.get('http://localhost:1001/api/blogs/viewblog',{
    headers:{Authorization:`Bearer ${token}`}
  })
  .then((response)=>{
    console.log(response);
    Setdata(response.data.data)
    
  })
  .catch((error)=>{
    console.log(error.message);
    
  })

},[])


  return (
    <>
    <div className='viewblogpage'>
      {data.map((datas)=>(
<div class="card">
  <div class="card__corner"></div>
  <div class="card__img">
    <span class="card__span">{datas.title}</span>
    <img src={`/images/${datas.image}`} height={'100%'} width={'100%'}/>
  </div>
  <div class="card-int">
    <p class="card-int__title">{datas.content}</p>
    <p class="excerpt">{datas.by}</p>
    <p class="excerpt">{datas.timestamp}</p>
    <button class="card-int__button"><Link to={`/singleview/${datas._id}`}>show</Link></button>
  </div>
</div>
))}
    </div>
    </>
  )
}
