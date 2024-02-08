import React, {useState}  from 'react'
import msex from "../../assets/home/ms-ex.png"
import upload from "../../assets/home/upload.png"
import Uploads from '../Uploads/Uploads'

import { useDropzone } from 'react-dropzone';


const Upload = () => {

    const [uploadedFiles, setUploadedFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setUploadedFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    },
  });

  return (
    <div className='w-full h-full flex flex-col gap-10 lg:justify-center items-center mt-[50px] lg:mt-0'>

        <div className='w-[310px] h-[350px] lg:w-[580px] lg:h-[370px] bg-[#FFFFFF] p-4 flex flex-col md:justify-center items-center'>
           <div className=' w-full h-full border border-dotted rounded-lg flex flex-col justify-center items-center '>
            <img className='w-[36px] h-[36px]' src={msex} alt="" />

                        <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p className='hidden md:block text-sm  lg:text-xl text-[#999CA0] pt-5'>Drop your excel sheet here or <span className='text-[#605BFF]'>browse</span> </p>
                <p className='md:hidden text-sm  lg:text-xl text-[#999CA0] pt-5'>Upload your excel sheet   <span className='text-[#605BFF]'>here</span> </p>
               
                </div>
           </div>
           

           <div className='w-full h-[56px] flex justify-center items-center gap-3 bg-[#605BFF] rounded-lg mt-5'>
                <img className='w-6 h-6' src={upload} alt="" />
                <p className='text-base font-semibold text-white'>Upload</p>
           </div>
        </div>

      


        <div className='w-full'>

        <Uploads uploadedFiles={uploadedFiles}/>
        </div>
      
    </div>
  )
}

export default Upload
