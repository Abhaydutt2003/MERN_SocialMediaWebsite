import {RouterProvider,createBrowserRouter} from 'react-router-dom' 
import {Home,Error,Landing,Auth} from './pages';
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
                loader:postsLoader(store),
                element:<Landing></Landing>,
                errorElement:<ErrorComp></ErrorComp>,
            },
            {
                path:'/auth',
                element:<Auth></Auth>,
                errorElement:<ErrorComp></ErrorComp>
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




