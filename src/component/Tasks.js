import Task from "./Task";


const Tasks = ({ tasks , OnDelete,onToggle}) => {
  return (
    <>
      {tasks.map((tasks) => (
        <Task key={tasks.id} task={tasks} OnDelete={OnDelete} onToggle={onToggle}/>
      ))}
    </>
  )
}

export default Tasks
