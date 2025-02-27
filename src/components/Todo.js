// import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";

// ICONS
import CheckIcon from "@mui/icons-material/Check";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import IconButton from "@mui/material/IconButton";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";

import { useContext } from "react";
import { TodosContext } from "../Contexts/todosContext";

// Pupop
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { useState } from "react";

export default function Todo({ todo }) {
  const { todos, setTodos } = useContext(TodosContext);
  const [title, setTitel] = useState(todo.title);
  const [details, setDetails] = useState(todo.details);

  const [updateTitleAndDetails, setUpdateTitleAndDetails] = useState({
    title: todo.title,
    details: todo.details,
  });

  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);

  // EVENT HANDLERS
  function handleCheckClick() {
    const updateTodos = todos.map((t) => {
      if (t.id === todo.id) {
        t.isCompleted = !t.isCompleted;
      }
      return t;
    });
    setTodos(updateTodos);
    localStorage.setItem("todos", JSON.stringify(updateTodos));
  }

  function handleDeleteClick() {
    setShowDeleteDialog(true);
  }

  function handleUpdateClick() {
    setShowUpdateDialog(true);
  }

  function handleDeleteDialogClose() {
    setShowDeleteDialog(false);
  }

  function handleUpdateDialogClose() {
    setShowUpdateDialog(false);
  }

  function HandleDeleteConfirm() {
    const updateTodos = todos.filter((t) => {
      return t.id !== todo.id;
    });
    setTodos(updateTodos);
    localStorage.setItem("todos", JSON.stringify(updateTodos));
  }

  function handleUpdateConfirm() {
    const updateTodos = todos.map((t) => {
      if (t.id === todo.id) {
        t.title = updateTitleAndDetails.title;
        t.details = updateTitleAndDetails.details;
      }
      return t;
    });
    setTodos(updateTodos);
    localStorage.setItem("todos", JSON.stringify(updateTodos));
    setShowUpdateDialog(false);
  }
  // !! EVENT HANDLERS !! \\

  return (
    <>
      {/* DELETE DIALOG */}
      <Dialog
        style={{ direction: "rtl" }}
        open={showDeleteDialog}
        onClose={handleDeleteDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          هل انت متأكد من رغبتك في حذف المهمة؟
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            لا يمكنك التراجع عن الحذف بعد إتمامه
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteDialogClose}>إغلاق</Button>
          <Button onClick={HandleDeleteConfirm} autoFocus>
            نعم, قم بالحذف
          </Button>
        </DialogActions>
      </Dialog>
      {/* !!=== DELETE DIALOG ===!! */}

      {/* UPDATE DIALOG */}
      <Dialog
        style={{ direction: "rtl" }}
        open={showUpdateDialog}
        onClose={handleUpdateDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">تعديل المهمة</DialogTitle>
        <DialogContent>
          <TextField
            onChange={(e) =>
              setUpdateTitleAndDetails({
                ...updateTitleAndDetails,
                title: e.target.value,
              })
            }
            value={updateTitleAndDetails.title}
            autoFocus
            required
            margin="dense"
            label="عنوان المهمة"
            fullWidth
            variant="standard"
          />

          <TextField
            onChange={(e) =>
              setUpdateTitleAndDetails({
                ...updateTitleAndDetails,
                details: e.target.value,
              })
            }
            value={updateTitleAndDetails.details}
            autoFocus
            required
            margin="dense"
            label="التفاصيل"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUpdateDialogClose}>إغلاق</Button>
          <Button onClick={handleUpdateConfirm} autoFocus>
            تأكيد
          </Button>
        </DialogActions>
      </Dialog>
      {/* !!=== UPDATE DIALOG ===!! */}

      <Card
        className="todoCard"
        sx={{
          minWidth: 275,
          background: "#283593",
          color: "white",
          marginTop: 5,
        }}
      >
        <CardContent>
          {/* Add align Items : center ; from myself */}
          <Grid container spacing={2} sx={{ alignItems: "center" }}>
            <Grid size={8}>
              <Typography
                variant="h5"
                sx={{
                  textAlign: "right",
                  textDecoration: todo.isCompleted ? "line-through" : "none",
                }}
              >
                {todo.title}
              </Typography>

              <Typography variant="h6" sx={{ textAlign: "right" }}>
                {todo.details}
              </Typography>
            </Grid>

            {/* ACTION BUTTONS */}
            <Grid
              size={4}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              {/* CHECK ICON BUTTON*/}
              <IconButton
                onClick={function () {
                  handleCheckClick();
                }}
                className="iconButton"
                aria-label="delete"
                style={{
                  background: todo.isCompleted ? "#8bc34a" : "white",
                  color: todo.isCompleted ? "white" : "#8bc34a",
                  border: "solid #8bc34a 3px",
                }}
              >
                <CheckIcon />
              </IconButton>
              {/* !!== CHECK ICON BUTTON ==!!*/}

              {/*  UPDATE BUTTON*/}
              <IconButton
                className="iconButton"
                aria-label="delete"
                onClick={() => handleUpdateClick()}
                style={{
                  background: "white",
                  color: "#1769aa",
                  border: "3px solid #1769aa",
                }}
              >
                <ModeEditOutlinedIcon />
              </IconButton>
              {/* !!== UPDATE BUTTON ==!! */}

              {/* DELETE BUTTON */}
              <IconButton
                className="iconButton"
                aria-label="delete"
                onClick={() => handleDeleteClick()}
                style={{
                  background: "white",
                  color: "#b23c17",
                  border: "3px solid #b23c17",
                }}
              >
                <DeleteOutlineOutlinedIcon />
              </IconButton>
              {/* !!== DELETE BUTTON ==!! */}
            </Grid>
            {/* !!== ACTION BUTTONS ==!! */}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
