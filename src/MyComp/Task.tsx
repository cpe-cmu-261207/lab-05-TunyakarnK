import { useState } from "react"

type Taskprop = {
    id: number;
    taskInput: any;
    delFn: Function;
    doneFn: Function;
}

const Task = ({id,taskInput,delFn,doneFn}:Taskprop) =>{
    
    const [isVisible,setVisible] = useState(false)
    return (
        <div className="flex justify-between h-8 items-center py-6 border-b" 
        onMouseOver = {()=> setVisible(true)} 
        onMouseLeave = {() => setVisible(false)}>
            <span className="text-2xl">{taskInput.value}</span>
                <div className="flex space-x-1 items-center">
                <button className="bg-green-400 w-24 text-2xl" style={{visibility:isVisible?'visible':'hidden'}} 
                onClick = {() => doneFn(id)}>Done</button>

                <button className="bg-red-400 w-24 text-2xl" style={{visibility:isVisible?'visible':'hidden'}} 
                onClick = {() => delFn(id)}>Delete</button>
                </div>
        </div>
    )
}

export default Task