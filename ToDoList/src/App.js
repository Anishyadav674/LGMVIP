import React from 'react';
import Todo from './component/todolist/todo.js';
import Restaurant from './component/basics/Restaurant.js';

export const App = () =>{
  return(
    <>
    <div className="todolist" style={{
      textAlign:"center",padding:"2rem"
    }}>
    <h2>TO DO LIST</h2>
    </div>
<Todo/>

{/* <div className="Restaurent" style={{
      textAlign:"center",padding:"2rem",marginTop:"1rem"
    }}>
    <h2> Restaurant</h2>
    </div>

<Restaurant/> */}
</> 
    )
}

export default App;

