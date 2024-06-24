 import { TiThMenuOutline } from "react-icons/ti";
 import { IoIosAddCircle } from "react-icons/io";
 import { IoIosChatbubbles } from "react-icons/io";
 import { IoIosHelpBuoy } from "react-icons/io";
 import { IoMdSettings } from "react-icons/io";
 import { MdOutlineDeleteOutline } from "react-icons/md";
 import { BiArea, BiHistory } from "react-icons/bi";
import style from "./sidebar.module.css";
import { useContext, useState } from "react";
import { Context } from "../context-api/context";
const SideBar = () => {
  const [bar,setbar]=useState(false);
  const {RecentDelete,setinitial,initial,input}=useContext(Context);
  
  return (
   
    <div className={`${style.Sidebar}`}>
      <div className={`${style.top}`}>
        { <TiThMenuOutline className={`${style.select}`} size={25} margin-left={20}onClick={()=>setbar(!bar)}/> }
        <div className={`${style.Newchat}` } onClick={()=>setinitial(true)} >
        {console.log("sidebar" + initial)}
        <IoIosAddCircle className={`${style.Newchat ,style.iconset}`} size={35}  />
          {bar && 
          <p className={`${style.itemstyle}`}>New Chat</p>}
        </div>
        {bar &&
        <div className={`${style.recent,style.pad}`}>
          <p className={`${style.itemstyle , style.recent}`}>Recent Chats</p>
          {input.map((item)=>
          <div className={`${style.recentmessage}`}>
          <IoIosChatbubbles />
          <div className={`${style.deleterecent}`}>
            <p className={`${style.itemstyle}`}>{item.props.slice(0,10)}</p>
            <MdOutlineDeleteOutline size= {25} className = {`${style.styledelete}`}onClick={()=>RecentDelete(item.props)}/>
            </div>
          </div>
          )}
        </div>
       }
      </div>
      <div className={`${style.bottom}`}>
        <div className={`${style.imagehelp ,style.recent , style.itemstyle}`}>
        <IoIosHelpBuoy size={25} className={`${style.marginbottom}`}/>
        {bar &&
          <p className={`${style.itemstyle}`}>help</p>}
        </div>
        <div className={`${style.imagesetting ,style.recent , style.itemstyle}`}>
        <IoMdSettings size={25} className={`${style.marginbottom}`}/>
        {bar &&
          <p className={`${style.itemstyle }`}>Setting</p>}
        </div>
        <div className={`${style.Activityimage ,style.recent , style.itemstyle}`}>
        <BiHistory size={25} />
        {bar &&
        <p className={`${style.itemstyle}`}>Activity</p>}
        </div>
      </div>
    </div>
  );
};
export default SideBar;
