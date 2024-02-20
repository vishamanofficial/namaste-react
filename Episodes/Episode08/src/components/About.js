import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return(
        <div>
            <h1>About Page.</h1>
            {/* <User name={"Aman (Function)"}/> */}
            <UserClass name={"Aman (Class)"}/>

        </div>
    )   
};

export default About;