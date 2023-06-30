import { useContext } from "react"
import ContextApi from "./ContextApi"

const useCustomContext = () => {

    return useContext(ContextApi)
}

export default useCustomContext;