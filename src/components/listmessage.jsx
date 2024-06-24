import { useContext,memo } from "react"
import { Context } from "../context-api/context"
import MessageArea from "./messagearea"
import FinalMessage from "./finalmessage"

const ListMessage=()=>{
    const {message,initial}=useContext(Context)
       
    return <> {!initial && message.map((item)=><FinalMessage title={item.props} message={item.ans}></FinalMessage>)}</>
}
export default memo (ListMessage);