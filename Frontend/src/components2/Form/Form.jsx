import { TextField, Button, Typography, Paper, Grid } from "@mui/material";

import { convertBase64 } from "../../utils/index";
import "./style.css";

import { useDispatch, useSelector } from "react-redux";
import { useEffect,useState } from "react";

import {createPostAction,updatePostAction} from '../../utils/actions';
import {addPost,updatePost} from '../../features/Posts/PostsSlice';

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  //fetch a particular post if we have a id provided
  const { posts, currentPostId } = useSelector((state) => {
    return state.postsState;
  });
  //if have currentPostId, auto fill the form
  useEffect(() => {
    let post = posts.find((post) => {
      if (post._id == currentPostId) {
        return post;
      } else {
        return null;
      }
    });
    if (post) setPostData(post);
  }, [currentPostId]);

  const dispatch = useDispatch();

  //handle form submit
  const handleSubmit = async(event)=>{
    event.preventDefault();
    if(currentPostId){
        const data = await updatePostAction(currentPostId,postData);
        dispatch(updatePost(data));
    }else{
        const data = await createPostAction(postData);
        dispatch(addPost(data));
    }
    clear();
  }
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
              {`${currentPostId ? "Editing " : "Creating "}`}a Memory
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
