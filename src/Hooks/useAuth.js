import { useContext } from "react"
import { useContexts } from "../Components/AuthContext/AuthContext"

const useAuth = ()=>{
    return useContext(useContexts)
}
export default useAuth;