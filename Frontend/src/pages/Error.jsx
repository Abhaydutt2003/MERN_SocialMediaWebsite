import { useRouteError } from "react-router-dom"


const Error = ()=>{
    //get the type of error from react-router-dom
    const error = useRouteError();
    if(error.status == 404){
        return <h1>Page not found</h1>
    }else{
        console.log(error);
        return <h1>Big error happen!!! panik!!!!</h1>
    }
}

export default Error;