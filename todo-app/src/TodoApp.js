import React, { useState, useEffect } from "react"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Grid from "@material-ui/core/Grid"
import TodoList from "./TodoList"

function TodoApp(){

   const initialTodos = [
      {id: 1, task: "Clean fishtank", completed: false},
      {id: 2, task: "Wash car", completed: false},
      {id: 3, task: "Grow beard", completed: false}
   ]

   const [todos, setTodos] = useState(initialTodos)

   return(
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
            style={{height: "64px"}}
         >
            <Toolbar>
               <Typography
                  color="inherit"
               >
                  Todos With Hooks
               </Typography>
            </Toolbar>
         </AppBar>
         <TodoList todos={todos} />
      </Paper>
   )
}

export default TodoApp