import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// Components //
import Todo from "./Todo";

// OUTERS
import { v4 as uuidv4 } from "uuid";

import { TodosContext } from "../Contexts/todosContext";
import { useContext, useState, useEffect } from "react";

export default function TodoList() {
  const { todos, setTodos } = useContext(TodosContext);

  const [titleInput, setTitleInput] = useState("");
  const [displayedTodosType, setDisplayedTodosType] = useState("all");

  // filteration arrays
  const completedTodos = todos.filter((t) => {
    return t.isCompleted;
  });

  const notCompletedTodos = todos.filter((t) => {
    return !t.isCompleted;
  });

  let todosToBeRendered = todos;

  if (displayedTodosType === "completed") {
    todosToBeRendered = completedTodos;
  } else if (displayedTodosType === "non-completed") {
    todosToBeRendered = notCompletedTodos;
  }

  const todosJsx = todosToBeRendered.map((t) => {
    return <Todo key={t.id} todo={t} />;
  });

  useEffect(() => {
    console.log("calling use effect");
    const storageTodos = JSON.parse(localStorage.getItem("todos")) ?? [];
    setTodos(storageTodos);
  }, []);

  function changeDisplayedType(e) {
    setDisplayedTodosType(e.target.value);
  }

  function handleAddClick() {
    let newTodo = {
      id: uuidv4(),
      title: titleInput,
      details: "",
      isCompleted: false,
    };

    const updateTodos = [...todos, newTodo];

    setTodos(updateTodos);
    setTitleInput("");
    localStorage.setItem("todos", JSON.stringify(updateTodos));
  }

  return (
    <Container maxWidth="sm">
      <Card
        sx={{ minWidth: 275 }}
        style={{ maxHeight: "80vh", overflow: "auto" }}
      >
        <CardContent>
          <Typography variant="h2" style={{ fontWeight: "bold" }}>
            مهامي
          </Typography>
          <Divider />

          {/* FILTER BUTTONS */}
          <ToggleButtonGroup
            style={{ direction: "ltr", marginTop: "30px" }}
            value={displayedTodosType}
            exclusive
            onChange={changeDisplayedType}
            aria-label="text alignment"
            color="primary"
          >
            <ToggleButton value="non-completed">غير المنجز</ToggleButton>
            <ToggleButton value="completed">المنجز</ToggleButton>
            <ToggleButton value="all">الكل</ToggleButton>
          </ToggleButtonGroup>
          {/* ==== FILTER BUTTON ==== */}

          {/* ALL TODOS */}
          {/* <Todo /> */}
          {todosJsx}
          {/* === ALL TODOS === */}

          {/* INPUT + ADD BUTTON */}
          <Grid container spacing={2} style={{ marginTop: "20px" }}>
            <Grid
              size={8}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <TextField
                style={{ width: "100%" }}
                id="outlined-basic"
                label="عنوان المهمة"
                variant="outlined"
                value={titleInput}
                onChange={(e) => {
                  setTitleInput(e.target.value);
                }}
              />
            </Grid>
            <Grid
              size={4}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Button
                style={{ width: "100%", height: "100%" }}
                variant="contained"
                onClick={() => handleAddClick()}
                disabled={titleInput.length <= 0}
              >
                اضافة
              </Button>
            </Grid>
          </Grid>
          {/* !== INPUT + ADD BUTTON ==!*/}
        </CardContent>
      </Card>
    </Container>
  );
}
