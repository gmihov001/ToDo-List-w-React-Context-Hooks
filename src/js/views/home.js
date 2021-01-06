import React, {useContext, useEffect, useState} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const TaskManager = () => { 
    const [task, setTask] = useState("");

    return (
	<div className="text-center mt-5">
		<h1>Task Manager</h1>
		<div className="inputField">
            <input 
            type="text"
            value={task}
            onChange={(e)=>setTask(e.target.value)}
            onKeyUp={(e)=> {
                if(e.keyCode == 13)  actions.addTask(task);
            }}
            />
        </div>
        <div className="taskList">
            <ul>
                {store.taskList.map((task, i)=>{
                return <li>{task.label}</li>;
                })}
            </ul>
        </div>
		
	</div>
);
};
