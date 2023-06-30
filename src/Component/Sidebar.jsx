import React from 'react'
import useCustomContext from './useCustomContext';
import logo from '../Component/logo (1).svg';
import { FaTimes } from 'react-icons/fa';

const Sidebar = () => {
   const {links, social, isSlider, closeSlider} = useCustomContext()

  return (
    <div className={isSlider ? ' fixed top-0 left-0 h-[100vh] w-[40vw] bg-slate-300 shadow-md z-10 transition-all translate-x-0' : ' -translate-x-full transition-all'}>
        <div className=' flex flex-col justify-between h-full p-2 my-2'>
            <div className='flex justify-between items-center'>
                <img src={logo} alt="logo" />

                <button>
                    <FaTimes size={30} className=' text-cyan-300'
                    onClick={closeSlider}
                    />
                </button>
            </div>

            <ul className=' flex flex-col justify-center items-start space-y-2'>
                {links.map(link => {
                    const {id, url, text, icon} = link

                        return (
                            <li key={id} className=' hover:bg-cyan-200 p-3 transition-colors text-slate-800 flex gap-4 items-center w-full'>
                                <i className=' text-xl'>{icon}</i>
                                <a href={url}>{text}</a>
                            </li>
                        )   
                })}
            </ul>

            {/* SOCIAL LINK  */}

            <ul className=' flex justify-start items-start  my-10'>
                {social.map(link => {
                    const {id, url, icon} = link

                        return (
                            <li key={id} className=' hover:bg-cyan-200 p-3 block transition-colors text-slate-800'>
                                
                              <a href={url}>{icon}</a>
                              
                            </li>
                        )   
                })}
            </ul>


        </div>
    </div>
  )
}

export default Sidebar