import {
  createContext,
  useState,
  useReducer,
  useEffect,
  useCallback,
  useMemo,
  useLayoutEffect,
} from "react";
import runChat from "../api/api";

export const Context = createContext();

const MessageAction = (Mee, action) => {
  let finalResult = Mee;
  if (action.type == "ON_DONE") {
    finalResult = [...Mee, action.payload];
  } else if (action.type == "ON_REMOVE") {
    finalResult = [];
  }
  return finalResult;
};
const InpuAction = (given, action) => {
  let finalResult = given;
  if (action.type == "ON_INPUT") {
    finalResult = [...given, action.payload];
  }
  else if(action.type=="ON_REMOVE_INPUT"){
    finalResult=given.filter((item)=> item.props!==action.payload.prop);
  }
  return finalResult;
};

const ContextAllProvider = ({ children }) => {
  let [message, dispatchmessage] = useReducer(MessageAction, []);
  const [input, dispatchinput] = useReducer(InpuAction, []);
  let ans;
  const Onreceive = (ans) => {
    dispatchmessage({
      type: "ON_RECEIVE",
      payload: {
        ans,
      },
    });
  };
  const [load, setload] = useState(false);
  const [initial, setinitial] = useState(false);

  const OnSent = async (props) => {
    console.log(initial);
    if (initial === true) {
      console.log(initial);
      dispatchmessage({
        type: "ON_REMOVE",
      });
      
    }
    dispatchinput({
      type: "ON_INPUT",
      payload: {
        props,
      },
    });
    setinitial(false);
    console.log(initial);
    setload(true);
    console.log(load);
    let an = await runChat(props);
    let anss = an.split("**").join("\n");
    ans = anss.split("*").join("\n");

    dispatchmessage({
      type: "ON_DONE",
      payload: {
        props,
        ans,
      },
    });

    
     
    

    setload(false);
    console.log(load);
  };
  const RecentDelete=(prop)=>{
    dispatchinput({
      type: "ON_REMOVE_INPUT",
      payload:{
        prop,
      }
    })
  }

  console.log(ans);

  return (
    <Context.Provider
      value={{ OnSent, initial, setinitial, message, Onreceive, load, input,RecentDelete }}
    >
      {children}
    </Context.Provider>
  );
};
export default ContextAllProvider;
