import { useState } from 'react'
import DoneTask from './DoneTask'
import Task from './Task'

const Todo = () =>{
    const[arrayInput,setInputToArray] = useState ([{}])
    const[input,setInput] = useState ('')
    
    // Press Enter
    const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        if(ev.key === 'Enter'){
            addTask(input)
        }
    }

    function addTask (input:string) {       
    const List = [...arrayInput,{value:input}] // ใส่ input ที่เหมือนกับ value ลงใน useState  
        if(input === ""){
                alert("Task cannot be empty"); 
                return false;
        }else{
            setInputToArray(List) //ใส่ค่าลงใน list
            setInput('')
    }
    }

    const DoneListArray:any[] = []
    const ShowTodolist = arrayInput.map(
    (taskInput,index) => {
        return <Task key = {index} id = {index} taskInput = {taskInput} delFn = {deleteBtn} doneFn = {doneBtn}></Task> 
    }).reverse()

    const ShowDonelist = DoneListArray.map(
    (taskInput,index) => {
        return <DoneTask key = {index} taskInput = {taskInput}></DoneTask>
    }).reverse()
    

    function deleteBtn (del:number) {
        const ArrayForDel = [...arrayInput]
        ArrayForDel.splice(del,1)
        setInputToArray(ArrayForDel)
    }

    function doneBtn (done:number) {
        const ArrayForDone = [...arrayInput]
        DoneListArray.push(ArrayForDone[done])
        deleteBtn(done) //ลบ task ที่เสร็จแล้วใน Task ทิ้ง
    }

    

    return (
        <div className='mx-auto max-w-4xl'>
        <div className='flex space-x-1'>
        <input className='border border-gray-400 w-full text-2xl'
        onKeyDown={onKeyDownCallback} value = {input} onChange = {(ev) => setInput(ev.target.value)} ></input>
        <button className='border border-gray-400 w-8 font-bold' onClick = {() => addTask(input)}>+</button>
        </div>
        {ShowTodolist}
        {ShowDonelist}
        </div>
    )
}

export default Todo