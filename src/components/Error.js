import { useRouteError } from "react-router-dom";
// with the help of useRouteError we can show more information about the error

const Error = () => {
    const err = useRouteError();
    // here we store the information of error
    console.log(err);
    return(
        <div>
            <h1>404 not found</h1>
        </div>
    )
};


export default Error;