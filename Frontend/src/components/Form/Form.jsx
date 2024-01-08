import { TextField, Button, Typography, Paper} from "@mui/material";
import styleObj from "./styles";
import { useState } from "react";
import { convertBase64 } from "../../utils";

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  //function to handle the form submit
  const handleSubmit = () => {};

  //function to handle file input
  const handleInput = async(event) => {
    const files = event.target.files[0];
    const base64 =  await convertBase64(files);
    console.log(base64);
    setPostData({ ...postData, selectedFile: base64 });
  };

  //function to clear the form
  const clear = ()=>{

  }

  return (
    <Paper>
      <form
        style={styleObj.fromStyle}
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating a Memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(event) =>
            setPostData({ ...postData, creator: event.target.value })
          }
        ></TextField>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(event) =>
            setPostData({ ...postData, title: event.target.value })
          }
        ></TextField>
        <TextField
          name="message"
          variant="outlined"
          label="message"
          fullWidth
          value={postData.creator}
          onChange={(event) =>
            setPostData({ ...postData, message: event.target.value })
          }
        ></TextField>
        <TextField
          name="tags"
          variant="outlined"
          label="tags"
          fullWidth
          value={postData.tags}
          onChange={(event) =>
            setPostData({ ...postData, tags: event.target.value })
          }
        ></TextField>
        <div style={styleObj.fileInput}>
          <input
            type="file"
            onChange={(event) => handleInput(event)}
            placeholder="Type some Text"
          ></input>
          <Button
            sx={styleObj.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
          <Button
            sx={styleObj.buttonSubmit}
            variant="contained"
            color="secondary"
            size="small"
            onClick={clear}
            fullWidth
          >
            {" "}
            Clear
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default Form;
