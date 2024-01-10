import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
import "./style.css";
import { store } from "../../../store";
import { deletePostAction } from "../../../actions/postActions";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../features/Posts/PostsSlice";

const Post = ({ post, setCurrentId }) => {
  //get the realtive time from when the post was created
  const relativeTime = dayjs(post.createdAt).fromNow();
  const dispatch = useDispatch();
  //handle delete post
  const handleDelete = async () => {
    //update the backend
    await deletePostAction(store, post._id)();
    //update the frontend
    dispatch(deletePost(post._id));
  };
  return (
    <Card className="card" sx={{ borderRadius: "15px" }}>
      <CardMedia
        className="media"
        image={
          post.selectedFile ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        title={post.title}
      ></CardMedia>
      <div className="overlay">
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{relativeTime}</Typography>
      </div>
      <div className="overlay2">
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(post._id)}
        >
          <EditIcon fontSize="medium"></EditIcon>
        </Button>
      </div>
      <div className="details">
        <Typography variant="body2" color="textSecondary" component="h2">
          {post.tags.map((tag) => {
            return `#${tag}`;
          })}
        </Typography>
      </div>
      <Typography className="title" gutterBottom variant="h5" component="h2">
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className="cardActions">
        <Button size="small" color="primary" onClick={() => {}}>
          <ThumbUpAltIcon fontSize="small" />
          Like {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={handleDelete}>
          <DeleteIcon fontSize="small" />
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
