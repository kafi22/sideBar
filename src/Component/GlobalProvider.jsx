import { useState } from "react";
import ContextApi from "./ContextApi"
import { links, social } from "./Data";

const GlobalProvider  = (props) => {

   const [data, setData] = useState()
   const [isModal, setModal] = useState(false)
   const [isSlider, setSlider] = useState(false)

   const openSlider = () => {
    setSlider(true)

   }

   const closeSlider = () => {
    setSlider(false)

   }

   const openModal = () => {
    setModal(true)

   }

   const closeModal = () => {
    setModal(false)

   }

   const getAllFeature = {
    openSlider,
    closeSlider,
    openModal,
    closeModal,
    isModal,
    isSlider,
    links,
    social
   }


    return (
        <ContextApi.Provider value={getAllFeature}>
            {props.children}
        </ContextApi.Provider>
    )
}

export default GlobalProvider;