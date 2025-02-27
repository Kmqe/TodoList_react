import { orange } from "@mui/material/colors";
import "./App.css";
import TodoList from "./components/TodoList";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TodosContext } from "./Contexts/todosContext";

// OUTERS
import { v4 as uuidv4 } from "uuid";

import { useState } from "react";

const theme = createTheme({
  typography: {
    fontFamily: ["Alexandria"],
  },

  palette: {
    primary: {
      main: "#dd2c00",
    },
  },
});

let initialTodos = [
  {
    id: uuidv4(),
    title: "قراءة كتاب",
    details: "Hello World , Thank you",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "قراءة كتاب",
    details: "Hello World , Thank you",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "قراءة كتاب",
    details: "Hello World , Thank you",
    isCompleted: false,
  },
];

function App() {
  let [todos, setTodos] = useState(initialTodos);

  return (
    <ThemeProvider theme={theme}>
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#191b1f",
          direction: "rtl",
          fontFamily: "Alexandria",
          minHeight: "100vh",
        }}
      >
        <TodosContext.Provider value={{ todos, setTodos }}>
          <TodoList />
        </TodosContext.Provider>
      </div>
    </ThemeProvider>
  );
}

export default App;
