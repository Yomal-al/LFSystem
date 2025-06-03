import layout from '@/components/lostitems'
import React from 'react'
import "tailwindcss";
import './index.css';
import Layout from "@/components/lostitems";
import NavBar from "@/components/navbar";
import {LoginForm} from "@/components/ui/login-form";
import { Routes, Route } from "react-router-dom";
import Founditems from "./components/founditems";
import Page from "@/components/ui/page";
import SignIn from "@/components/signin";
import SignUp from "@/components/signup";



function App() {
    return (


    <Routes>
        <Route path="/"  element={<SignIn/>}/>
        <Route path="/signup.tsx"  element={<SignUp/>}/>
        <Route path="/founditems.tsx"  element={<Page/>}/>
    </Routes>
    );
}
export default App;