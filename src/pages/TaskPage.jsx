import { useState } from "react"
import { tasksData } from "../data/userData"
export default function TaskPage(){
   const [taskList, setTaskList] = useState(tasksData)
   const [text , setText] = useState("")
   const [selectId, setSelectId] = useState(null)
   const seletedTask  =  taskList.find(t=>t.id === selectId)
    function handleDetail(tasksData){
        setSelectId(tasksData.id)

    }

    function handleTextChange(e){

        setText(e.target.value)
    }
    function handleTaskAdding(){
        setTaskList(
            ()=>[...taskList,{id:Date.now(),task:text, taskDetail:"",completed:false}]
        )
        setText("")
    }

    function handleTaskDelete(id){
        setTaskList(prev=>prev.filter(p=>p.id!== id))

    }
    function handleComplete(id){
        setTaskList(prev=>prev.map((p)=>p.id === id? {...p,completed:!p.completed}:p))

    }
    return(
        <div>
            <input type="text" value={text} onChange={handleTextChange} />
            <button onClick={handleTaskAdding}>Add Task</button>
            {taskList.map((t)=>{
                return(
                    <li key={t.id} style={{ textDecoration: t.completed ? "line-through" : "none" }} >
                        <input type="checkbox" onClick={()=>handleComplete(t.id)}/>
                        {t.task} 
                        <button onClick={()=>handleDetail(t)}>Detail</button>
                        <button onClick={()=>handleTaskDelete(t.id)}>Delete</button>
                    </li>
                )
            })}
            
            {
                seletedTask&&(
                    <p>{seletedTask.taskDetail}</p>
                )
            }
        </div>
    )

}