import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "../App";
import Dashboard from "../Components/dashboard";
import Login from "../Components/login"

const baseRouter =() =>(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="/" element={<Navigate to="/login"/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/dashboard" element={<Dashboard/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default baseRouter;