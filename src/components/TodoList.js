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

import { useState } from "react";

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

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [titleInput, setTitleInput] = useState("");

  const todosJsx = todos.map((t) => {
    return <Todo key={t.id} todo={t} />;
  });

  function handleAddClick() {
    let newTodo = {
      id: uuidv4(),
      title: titleInput,
      details: "",
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
    setTitleInput("");
  }

  return (
    <Container maxWidth="sm">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h2" style={{ fontWeight: "bold" }}>
            مهامي
          </Typography>
          <Divider />

          {/* FILTER BUTTONS */}
          <ToggleButtonGroup
            style={{ direction: "ltr", marginTop: "30px" }}
            // value={alignment}
            exclusive
            // onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton value="right">غير المنجز</ToggleButton>
            <ToggleButton value="center">المنجز</ToggleButton>
            <ToggleButton value="left">الكل</ToggleButton>
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
