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

export default function Todo({ todo }) {
  function handleCheckClick(todoId) {
    console.log(todoId);
  }

  return (
    <>
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
              <Typography variant="h5" sx={{ textAlign: "right" }}>
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
                  handleCheckClick(todo.id);
                }}
                className="iconButton"
                aria-label="delete"
                style={{
                  background: "white",
                  color: "#8bc34a",
                  border: "solid #8bc34a 3px",
                }}
              >
                <CheckIcon />
              </IconButton>

              {/* !!== CHECK ICON BUTTON ==!!*/}

              <IconButton
                className="iconButton"
                aria-label="delete"
                style={{
                  background: "white",
                  color: "#1769aa",
                  border: "3px solid #1769aa",
                }}
              >
                <ModeEditOutlinedIcon />
              </IconButton>

              <IconButton
                className="iconButton"
                aria-label="delete"
                style={{
                  background: "white",
                  color: "#b23c17",
                  border: "3px solid #b23c17",
                }}
              >
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            </Grid>
            {/* ==== ACTION BUTTONS ==== */}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
