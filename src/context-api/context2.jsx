import runChat from "../api/api";
import { createContext, useState } from "react";


export const Context2=createContext();

const ContextAllProvider=({children})=>{
    const [input,setinput]=useState("");
    const [recentprompt,setrecentprompt]=useState("");
    const [preprompt,setpreprompt]=useState([]);
    const [showresult,setshowresult]=useState(false);
    const [loading,setloading]=useState(false);
    const [resultdata,setresultdata]=useState(false);

     const OnSent = async (input)=>{

        setloading(true)
        setshowresult(true)
         let message = runChat(input);
         setloading(false);
         setresultdata(message)
         console.log(message);

      }

       const ContextValue={OnSent,input,setinput,resultdata,loading,showresult,recentprompt,setrecentprompt,preprompt,setpreprompt}

    return <Context2.Provider value={ContextValue}>
        {children}
    </Context2.Provider>
}
export default ContextAllProvider;