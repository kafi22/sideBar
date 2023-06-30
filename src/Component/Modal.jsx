import React from 'react'
import useCustomContext from './useCustomContext'
import {FaTimes} from 'react-icons/fa'


const Modal = () => {

  const {isModal, closeModal}  =  useCustomContext()
  return (
  
    <div className={isModal ? 'absolute top-0 left-0 h-full w-full grid place-content-center bg-slate-500 z-10 opacity-100' : 'opacity-0 -z-2'}>
    <div className=' bg-slate-100 h-[30vh] w-[30vw] shadow-md rounded-md py-4 px-4 flex justify-center items-center flex-col relative'>
        <h3 className=' text-xl font-medium tracking-wider'>This is the First One</h3>
        <button onClick={closeModal} className='  absolute top-2 right-2'>
        <FaTimes size={30}  className=' text-cyan-400'/>
        </button>
    </div>

</div>
   
  )
}

export default Modal