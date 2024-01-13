import { useRouteError } from "react-router-dom";


const Error = ()=>{
    console.log(useRouteError());
    return <h4>There as an error</h4>
}


export default Error;