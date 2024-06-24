import { useContext, memo } from 'react';
import style from './finalmessage.module.css';

const FinalMessage = ({ title,message})=>{
    return <> 
        <div className={`${style.mainfinalmessage}`}> 
         <h3 className={`${style.title}`}>{title}</h3> 
         
         <p>{message}</p>
         </div>
         </>
}
export default memo(FinalMessage);