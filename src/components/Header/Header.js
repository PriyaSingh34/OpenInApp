import React, { useState }  from 'react'
import ring from '../../assets/home/not.png'
import pic from '../../assets/home/pic.png'
import menu from '../../assets/home/menu.png'
import Logo from '../../assets/home/Logo and company.png'

const Header = ({setIsOpen,isOpen}) => {




  return (
    <div className=' w-full  flex  justify-between p-8  bg-white lg:bg-[#F8FAFF]'>
      <div className='flex gap-5 items-center'>
     <img onClick={()=>setIsOpen(!isOpen)} className='w-4 h-3 lg:hidden' src={menu} alt="" />
     <img className='lg:hidden w-[90px] h-[35px] ' src={Logo} alt="" />
      <p className='hidden lg:block text-2xl font-semibold'>Upload CSV</p>
      </div>
      <div className='flex gap-5'>
        <img className='w-5 h-6' src={ring} alt="" />
        <div>
          <img className='rounded-full w-7 h-7' src={pic} alt="" />
        </div>
      </div>


      
    </div>
  )
}

export default Header
