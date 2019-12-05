import React from "react"
import Paper from "@material-ui/core/Paper"
import TextField from "@material-ui/core/TextField"
import useInputState from "./hooks/useInputState"

function TodoForm({ addTodo }){

   const [task, changeTask, resetTask] = useInputState("")

   return(
      <Paper>
         <form onSubmit={e => {
            e.preventDefault()
            addTodo(task)
            resetTask()
         }}>
         <TextField
            value={task}
            onChange={changeTask}
         />
         </form>
      </Paper>
   )
}

export default TodoForm