import React from "react";
import "./todoapp.css";


function TodoApp() {
    return (   
     <div className="todo">
           <input type="text" name="text" id="text" placeholder="Add task here..." />
           <button className="add-btn">Add</button>
     </div>
     );
    }
    
    export default TodoApp;