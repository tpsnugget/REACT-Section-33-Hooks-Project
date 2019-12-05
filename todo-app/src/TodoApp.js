import React, { useState } from "react"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Grid from "@material-ui/core/Grid"
import TodoList from "./TodoList"
import TodoForm from "./TodoForm"

function TodoApp() {

   const initialTodos = [
      { id: 1, task: "Clean fishtank", completed: false },
      { id: 2, task: "Wash car", completed: false },
      { id: 3, task: "Grow beard", completed: false }
   ]

   const [todos, setTodos] = useState(initialTodos)
   const addTodo = newTodoText => {
      setTodos([...todos, { id: 4, task: newTodoText, completed: false }])
   }

   return (
      <Paper style={{
         padding: 0,
         margin: 0,
         height: "100vh",
         backgroundColor: "#fafafa"
      }}
         elevation={0}
      >
         <AppBar
            color="primary"
            position="static"
            style={{ height: "64px" }}
         >
            <Toolbar>
               <Typography
                  color="inherit"
               >
                  Todos With Hooks
               </Typography>
            </Toolbar>
         </AppBar>
         <Grid container justify="center" style={{marginTop: "1rem"}}>
            <Grid item xs={11} md={8} ls={4}>
               <TodoForm addTodo={addTodo} />
               <TodoList todos={todos} />
            </Grid>
         </Grid>
      </Paper>
   )
}

export default TodoApp