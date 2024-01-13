//TODO look into after completion of code to migrate or not to react router
import {intitalFetch} from './actions';

//import the reducers from the redux store
import {setAllPosts} from '../features/Posts/PostsSlice';

//loader to get data from the backend and update the redux store
export const postsLoader = (store)=>async()=>{
    const data = await intitalFetch();
    store.dispatch(setAllPosts(data));
}