import { useSelector } from 'react-redux';
import Post from './Post/Post';

const Posts = ()=>{
    const {posts} = useSelector((state)=>{
        return state.postsState;
    });
    console.log(posts);
    return (
        <>
        <h1>POSTS</h1>
        <Post></Post>
        <Post></Post>
        </>
    )
}

export default Posts;