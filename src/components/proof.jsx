import React from 'react'

export default function Proof() {
  return (
    <div className='w-full h-full'>
    <button className= "px-4 py-2 flex bg-blue-500 text-white font-bold justify-center items-center rounded-lg ">
      <p>press me</p>
    </button>
    <div className='fixed top-0 w-full h-full bg-black/30 justify-center items-center flex'>
    <div className='w-50 h-50 bg-white rounded-lg flex justify-center items-center'>
      <button className='px-4 py-2 flex justify-center items-center bg-blue-500 text-white font-bold'>First press me</button>
    </div>
    </div>
    </div>
  )
}
