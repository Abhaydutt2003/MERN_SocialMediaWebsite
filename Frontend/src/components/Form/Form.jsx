import { TextField, Button, Typography, Paper, Grid } from "@mui/material";
import { useState } from "react";
import { convertBase64 } from "../../utils";
import "./style.css";

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  //function to handle the form submit
  const handleSubmit = (event) => {
     event.preventDefault();
    // const formData = new FormData(event.currentTarget);
    // console.log(Object.fromEntries(formData));
  };

  //function to handle file input
  const handleInput = async (event) => {
    const files = event.target.files[0];
    const base64 = await convertBase64(files);
    console.log(base64);
    setPostData({ ...postData, selectedFile: base64 });
  };

  //function to clear the form
  const clear = () => {};

  return (
    <Paper>
      <form
        className="form"
        autoComplete="off"
        noValidate
        onSubmit={(event)=>handleSubmit(event)}
      >
        <Grid alignItems="center">
          <Grid item>
            <Typography variant="h6">Creating a Memory</Typography>
          </Grid>
          <Grid item>
            <TextField
              name="creator"
              variant="outlined"
              label="Creator"
              value={postData.creator}
              onChange={(event) =>
                setPostData({ ...postData, creator: event.target.value })
              }
            ></TextField>
          </Grid>
          <Grid item>
            <TextField
              name="title"
              variant="outlined"
              label="Title"
              value={postData.title}
              onChange={(event) =>
                setPostData({ ...postData, title: event.target.value })
              }
            ></TextField>
          </Grid>
          <Grid item>
            <TextField
              name="message"
              variant="outlined"
              label="message"
              value={postData.creator}
              onChange={(event) =>
                setPostData({ ...postData, message: event.target.value })
              }
            ></TextField>
          </Grid>
          <Grid item>
            <TextField
              name="tags"
              variant="outlined"
              label="tags"
              value={postData.tags}
              onChange={(event) =>
                setPostData({ ...postData, tags: event.target.value })
              }
            ></TextField>
          </Grid>
          <Grid item>
            <div className="fileInput">
              <input
                type="file"
                onChange={(event) => handleInput(event)}
                placeholder="Type some Text"
              ></input>
              <Button
                sx={{ marginBottom: "10px" }}
                variant="contained"
                color="primary"
                size="large"
                type="submit"
              >
                Submit
              </Button>
              <Button
                sx={{ marginBottom: "10px" }}
                variant="contained"
                color="secondary"
                size="small"
                onClick={clear}
              >
                {" "}
                Clear
              </Button>
            </div>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default Form;

//to style MUI components we will use styled components
//for normal components we will use normal css
