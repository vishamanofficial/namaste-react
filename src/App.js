import React from "react";
import ReactDOM from "react-dom/client";

// importhing components
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

// createBrouserRouter me list routing condigurations likhnege , RouterProvider use render krne me help karega , Outlet use accodinglu route krwayega
import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom";


const AppLayout = () => {
    return(
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
};

// to developer routes, we have to create routing configurations
// ab hm chahte hai ki hamara header waise ka waisa hi rhe bs uske neeche ka content chenge ho to iske liye hm applayout me children banayenge
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
        ],
        errorElement: <Error/>,
    }
]);



const root = ReactDOM.createRoot(document.getElementById("root"));

// RouterProvider ki help se appRouter ko render karwayenege
root.render(< RouterProvider router={appRouter}/>);