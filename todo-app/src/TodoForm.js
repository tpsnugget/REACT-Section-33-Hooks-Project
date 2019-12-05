import React from "react"
import Paper from "@material-ui/core/Paper"
import TextField from "@material-ui/core/TextField"
import useInputState from "./hooks/useInputState"

function TodoForm({ addTodo }) {

   const [task, changeTask, resetTask] = useInputState("")

   return (
      <Paper style={{margin: "1rem 0", padding: "0 1rem"}}>
         <form onSubmit={e => {
            e.preventDefault()
            addTodo(task)
            resetTask()
         }}>
            <TextField
               value={task}
               onChange={changeTask}
               margin="normal"
               label="Add New Todo"
               fullWidth
            />
         </form>
      </Paper>
   )
}

export default TodoForm