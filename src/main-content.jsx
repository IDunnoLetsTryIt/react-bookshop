import'./Main.scss'
import Homepage from './Homepage';
import Context from './Context';
import {  useContext } from 'react';
import MainRouter from './MainRouter';
import { RouterProvider } from 'react-router-dom';

export default function MainContent({page}){
    const {Context:{ theme } }= useContext(Context);

    let content='';
    if (page===''){
        content =(
            <Homepage />
        )
        }else if (page==='about'){
            content = (
                <h2>this is us</h2>
            )
        }else if (page==='contact'){
            content = (
                <h2>Contact us.</h2>
            )
    } else if (page === 'books') {
        content = (
            <h2>Books index</h2>
        )
    } else if (page === 'authors') {
        content = (
            <h2>Authors index</h2>
        )
    } else {
        content = (
            <h2>404: Page not found</h2>
        )
    }
    return (
        <div className={"main"}>
        <h1 className="app__headline">Elkins <br />& Sons</h1>

        <RouterProvider router={MainRouter} />
        </div>
    )
}