type Donetaskprop = {
    taskInput: any;
}

const DoneTask = ({taskInput}:Donetaskprop) =>{

    return (
        <div className="flex justify-between h-8 items-center py-6 border-b">
            <span className="text-2xl line-through">{taskInput.value}</span>
        </div>
    )
}

export default DoneTask