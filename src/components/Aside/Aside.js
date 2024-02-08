import React from 'react'
import logo from "../../assets/home/Logo and company.png"
import cat1 from "../../assets/home/cat-1.png"
import cat2 from "../../assets/home/cat-2.png"
import cat3 from "../../assets/home/cat-3.png"
import cat4 from "../../assets/home/cat-4.png"
import cat5 from "../../assets/home/cat-5.png"
import cat6 from "../../assets/home/cat-6.png"
import cat7 from "../../assets/home/cat-7.png"


const Aside = ({isOpen,setIsOpen}) => {
  return (
    <div className={`${isOpen?'absolute  top-0 left-0':'absolute  top-0 left-[-100%]'} lg:left-0 w-[360px] md:w-[300px] h-full bg-[#FFFFFF] shadow-xl md:shadow-none`}>
        
        <div className='flex justify-between w-full p-10 '>
         <img className='w-[150px] h-[60px]' src={logo} alt="" />
       < p onClick={()=>setIsOpen(!isOpen)} className='lg:hidden font-bold mt-4 text-lg'>X</p>
        </div>

        <div className='w-full p-6'>
           <div className='flex gap-5 '>
            <img className='w-[24px] h-[24px]' src={cat1} alt="" />
            <p className='text-lg font-semibold text-[#9A9AA9]'>Dashboard</p>
           </div>
           <div className='flex gap-5 mt-6 '>
            <img className='w-[24px] h-[24px]' src={cat2} alt="" />
            <p className='text-lg font-semibold text-[#605BFF]'>Upload</p>
           </div>
           <div className='flex gap-5 mt-6'>
            <img className='w-[24px] h-[24px]' src={cat3} alt="" />
            <p className='text-lg font-semibold text-[#9A9AA9]'>Invoice</p>
           </div>
           <div className='flex gap-5 mt-6'>
            <img className='w-[24px] h-[24px]' src={cat4} alt="" />
            <p className='text-lg font-semibold text-[#9A9AA9]'>Schedule</p>
           </div>
           <div className='flex gap-5 mt-6'>
            <img className='w-[24px] h-[24px]' src={cat5} alt="" />
            <p className='text-lg font-semibold text-[#9A9AA9]'>Calendar</p>
           </div>
           <div className='flex gap-5 mt-6'>
            <img className='w-[24px] h-[24px]' src={cat6} alt="" />
            <p className='text-lg font-semibold text-[#9A9AA9]'>Notification</p>
           </div>
           <div className='flex gap-5 mt-6'>
            <img className='w-[24px] h-[24px]' src={cat7} alt="" />
            <p className='text-lg font-semibold text-[#9A9AA9]'>Settings</p>
           </div>
          
        </div>
      
    </div>
  )
}

export default Aside
