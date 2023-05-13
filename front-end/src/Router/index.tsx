import {Navigate} from 'react-router-dom'
import React, { lazy } from 'react';


/**
 * use lazy loading to avoid load the unnecessary components 
 * when the first time open web
 * then it can run faster on some old computer.
 * or we can stil import components directly
 */

// import Login from '../Components/login'
// import Dashboard from '../Components/dashboard';
const Dashboard = lazy(()=>import('../Components/dashboard'));
const Login = lazy(()=>import('../Components/login'));

/**
 * use the React.Suspense to show a notification that it's loading 
 * when the loading to slow
 */
const withLodingComponent = (comp:JSX.Element) =>(
    <React.Suspense fallback={<div>Loading...</div>}>
            {comp}
    </React.Suspense>
);

const routes = [
    {
        path:"/",
        element: <Navigate to="/login"/>
    },
    {
        path:"/login",
        element: withLodingComponent(<Login />)
    },
    {
        path:"/dashboard",
        element: withLodingComponent(<Dashboard />)
    },
    {//when user trying to open a page that not exist, then redirect to 404 page
        path:"*",
        element: <Navigate to="/dashboard" />
    }
]

export default routes;