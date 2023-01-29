import React  from "react";
import "./style.css";

const Reducer = (state, action) => {
if (action.Type === "Inc"){
    state+=1;
}
if (state > 0 && action.Type === "Dec") {
    state-=1;
}
return state;
};
//   const [myNum, setMyNum] = React.useState(0);


const UseReducer=()=>{
    
    const initialData = 15;
const [state,dispatch]=React.useReducer(Reducer,initialData)

// dispatch reducer ko trigger krta hai
  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div class="button2" onClick={()=>dispatch({Type:"Inc"})}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div
          class="button2"
          onClick={() =>dispatch({Type:"Dec"})}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );

  }
export default UseReducer;
