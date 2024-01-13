import {RouterProvider,createBrowserRouter} from 'react-router-dom' 
import {Home,Error,Posts} from './pages';
import {ErrorComp} from './components2';
import {store} from './store';
import {postsLoader} from './utils/Loaders';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>,
        errorElement:<Error></Error>,
        children:[
            {
                index:true,
                element:<Posts></Posts>,
                errorElement:<ErrorComp></ErrorComp>,
                loader:postsLoader(store)
            }
        ]
    }
]);

const App = ()=>{
    return(
        <RouterProvider router={router}></RouterProvider>
    )
}

export default App;




