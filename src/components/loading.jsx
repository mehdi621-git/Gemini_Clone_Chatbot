import { useContext } from "react";
import { Context } from "../context-api/context";

const Loading = ()=>{
         const {load}=useContext(Context);
    return <>
    {load === true &&
    <div className="loadrot">
    <div className="loadingmain"></div>
    <div className="loadingmain"></div>
    <div className="loadingmain"></div>
    
    </div>
}
    </>

}
export default Loading;