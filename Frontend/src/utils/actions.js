//remember to always always console.log error and not error.message

//import axios custom fetch function
import {customFetch} from './index';


//action to do the initial fetch
export const intitalFetch = async()=>{
    try{
        const {data} = await customFetch.get('/');
        return data;
    }catch(error){
        return console.log(error);
    }
}


