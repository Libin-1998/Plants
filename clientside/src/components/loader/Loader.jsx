import React from 'react'
import './Loader.css'
import RingLoader from "react-spinners/SyncLoader";

export default function Loader() {

    const online=navigator.onLine

  return (
    <>
    <div className='loaderpage'>
    <RingLoader
  color="#20b264"
  loading
  speedMultiplier={1}
/>
</div>
    </>
  )
}
