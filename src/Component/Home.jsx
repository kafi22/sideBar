import React from 'react'
import useCustomContext from './useCustomContext'
import {FaBars} from 'react-icons/fa'


const Home = () => {
  const {openModal, openSlider} =  useCustomContext()
  return (
    <div className=' container mx-auto max-w-[1140px] p-4 grid place-content-center min-h-screen'>
        <button className='  fixed top-3 left-4 z-10' onClick={openSlider}>
        <FaBars size={30} className=' text-fuchsia-400' />
        </button>
        <button className=' bg-cyan-400 py-2 px-4 rounded-md shadow-md text-white'  onClick={openModal}>Modal Open</button>
    </div>
  )
}

export default Home