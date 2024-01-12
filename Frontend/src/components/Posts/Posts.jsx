import { useSelector } from 'react-redux';
import Post from './Post/Post';
import {CircularProgress,Grid} from '@mui/material';

const Posts = ({setCurrentId})=>{
    const {posts} = useSelector((state)=>{
        return state.postsState;
    });
    return (
       !posts.length ? <CircularProgress/> :(
        <Grid container alignItems='stretch' spacing={3}>
            {posts.map((post)=>{
                return <Grid item key = {post._id} xs = {12} sm = {6}>
                    <Post setCurrentId = {setCurrentId} post = {post}></Post>
                </Grid>
            })}
        </Grid>
       )
    )
}

export default Posts;