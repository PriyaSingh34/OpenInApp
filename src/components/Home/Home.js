import React, { useState } from 'react'
import Header from '../Header/Header'
import Aside from '../Aside/Aside'
import Upload from '../Upload/Upload'

const Home = () => {
  const [isOpen,setIsOpen]=useState(false)
  return (
    <div className='w-full h-full flex  ' >
      <div className='  lg:w-[20%] h-full'>
      <Aside isOpen={isOpen} setIsOpen={setIsOpen}/>

      </div>
      <div className='w-full lg:w-[80%] h-full'>
      <Header setIsOpen={setIsOpen} isOpen={isOpen}/>
      <Upload/>
      </div>
    </div>
  )
}

export default Home
