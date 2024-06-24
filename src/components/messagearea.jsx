import style from './messagearea.module.css';
import { FaCompass } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { useContext } from 'react';
import { Context } from '../context-api/context';
import Loading from './loading';


const MessageArea=()=>{
   const {message,load,initial,OnSent}=useContext(Context);  
    return <>
    
       {message == "" || initial === true?
        load ===false?
    <div className={`${style.messagearea}`}>
           <div className={`${style.welcome}`}>
              <p><span>Hello</span></p>
              <p>How can I help you Today</p>
           </div>
        
       <div className={`${style.card}`} >
          <div className={`${style.cards}`} onClick={()=>OnSent("Suggest Beautiful place on trip")}>
            <p>Suggest Beautiful place on trip</p>
            <FaCompass size={15} className={`${style.iconset}`}/>
          </div>
          <div className={`${style.cards}`} onClick={()=>OnSent("Can you write a haiku about the ocean")}>
            <p>Can you write a haiku about the ocean</p>
            <FaLightbulb size={15} className={`${style.iconset}`}/>
          </div>
          <div className={`${style.cards}`} onClick={()=>OnSent("Explain the theory of relativity")}>
            <p>Explain the theory of relativity</p>
            <FaRegMessage size={15} className={`${style.iconset}`}/>
          </div>
          <div className={`${style.cards}`} onClick={()=>OnSent("Who are you?")}>
            <p>Who am I?</p>
            <FaCode size={15} className={`${style.iconset}`}/>
          </div>
       </div>
       </div>:<Loading></Loading>

     : ""  }
    </>
}
export default MessageArea;