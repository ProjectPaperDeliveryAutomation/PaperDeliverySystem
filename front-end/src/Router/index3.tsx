import {Navigate} from 'react-router-dom'
import React, { lazy } from 'react';
import Homelayout from '../pages/homelayout'

/**
 * use lazy loading to avoid load the unnecessary components 
 * when the first time open web
 * then it can run faster on some old computer.
 * or we can stil import components directly
 */

// import Login from '../Components/login'
// import Dashboard from '../Components/dashboard';
// const Dashboard = lazy(()=>import('../pages/homelayout'));
const Login = lazy(()=>import('../pages/login'));
const Students = lazy(()=>import('../pages/students'));
const Teams = lazy(()=>import('../pages/teams'));
const Projects = lazy(()=>import('../pages/projects'));


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
        path:"/",
        element: <Homelayout></Homelayout>,
        children:[
            {
                path:"/students",
                elemetn:withLodingComponent(<Students />)
            },
            {
                path:"/teams",
                elemetn:withLodingComponent(<Teams />)
            },
            {
                path:"/projects",
                elemetn:withLodingComponent(<Projects />)
            }
        ]
    }
]

export default routes;