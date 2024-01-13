import { TextField, Button, Typography, Paper, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { convertBase64 } from "../../utils";
import "./style.css";
import {
  createNewPost,
  postUpdateAction,
} from "../../actions/postActions";
import { store } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import {updatePost} from '../../features/Posts/PostsSlice';

const Form = ({ currentId, setCurrentId }) => {
  //fetch a particular post if we have a id provided
  const { posts } = useSelector((state) => {
    return state.postsState;
  });
  let post = posts.find((post) => {
    if (post._id == currentId) {
      return post;
    } else {
      return null;
    }
  });
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);
  //could have used FormData Api instead of state
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const dispatch = useDispatch();
  //function to handle the form submit
  const handleSubmit = async (event) => {
    //prevent the default behaviour
    event.preventDefault();
    if (currentId) {
      //update the backend
      const newPost = await postUpdateAction(store, postData, currentId)();
      //update the redux store
      dispatch(updatePost(newPost));
    } else {
      //create a new post using postActions
      await createNewPost(store, postData)();
    }
    //clear the form after creating or upadating the post
    clear();
  };

  //function to handle file input
  const handleInput = async (event) => {
    const files = event.target.files[0];
    const base64 = await convertBase64(files);
    //console.log(base64);
    setPostData({ ...postData, selectedFile: base64 });
  };

  //function to clear the form
  const clear = () => {
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  return (
    <Paper>
      <form
        className="form"
        autoComplete="off"
        noValidate
        onSubmit={(event) => handleSubmit(event)}
      >
        <Grid alignItems="center">
          <Grid item>
            <Typography variant="h6">
              {`${currentId ? "Editing " : "Creating "}`}a Memory
            </Typography>
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
              value={postData.message}
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
                setPostData({ ...postData, tags: event.target.value.split(',') })
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
