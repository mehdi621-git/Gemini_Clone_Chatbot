import { MdAddPhotoAlternate } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import style from './search.module.css';
import { useContext, useRef } from "react";
import {Context} from '../context-api/context'

const Search=()=>{
    const {OnSent}=useContext(Context);
      const userMessage= useRef();
      const Entered = ()=>{
        
        const Message = userMessage.current.value;
        console.log("Done")
        OnSent(Message);
        userMessage.current.value = " ";
      } 
     
    return <>
    <div className={`${style.maindiv}`}>
        <input type="search" placeholder="search anything..." 
        ref={userMessage}
        />
        <div>
        <MdAddPhotoAlternate />
        <FaMicrophone />
        <IoIosSend onClick={Entered}/>
        </div>
    </div>
    </>
}
export default Search;