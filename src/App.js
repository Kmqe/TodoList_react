import { orange } from "@mui/material/colors";
import "./App.css";
import TodoList from "./components/TodoList";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Alexandria"],
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#191b1f",
          minHeight: "100vh",
          direction: "rtl",
          fontFamily: "Alexandria",
        }}
      >
        <TodoList />
      </div>
    </ThemeProvider>
  );
}

export default App;
