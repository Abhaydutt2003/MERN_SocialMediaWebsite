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
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);

import "./style.css";

const Post = ({ post }) => {
  console.log(post);
  const date = day(post.createdAt).format("hh:mm a - MMM Do, YYYY");
  return (
    <Card className="card" sx={{borderRadius:'15px'}}>
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
        <Typography variant="body2">{date}</Typography>
      </div>
      <div className="overlay2">
        <Button style={{ color: "white" }} size="small" onClick={() => {}}>
          <MoreHorizIcon fontSize="small"></MoreHorizIcon>
        </Button>
      </div>
      <div className="details">
        <Typography variant="body2" ccolor="textSecondary" component="h2">
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
        <Button size="small" color="primary" onClick={() => {}}>
          <DeleteIcon fontSize="small" />
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
