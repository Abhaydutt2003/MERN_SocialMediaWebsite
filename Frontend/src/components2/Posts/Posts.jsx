import SinglePost from '../SinglePost/SinglePost'
import { useNavigation } from "react-router-dom";
import {useSelector} from 'react-redux'
import {CircularProgress,Grid} from '@mui/material';



const Posts = ()=>{
    const isLoading = useNavigation().state === "loading";
    const {posts} = useSelector((state)=>{
        return state.postsState;
    });
    return(
        isLoading?<CircularProgress></CircularProgress>:(
            <Grid container alignItems='stretch' spacing={3}>
                {posts.map((post)=>{
                    return <Grid item key = {post._id} xs = {12} sm = {11} md = {6}>
                        <SinglePost post = {post}></SinglePost>
                    </Grid>
                })}
            </Grid>
           )
    );
}

export default Posts;