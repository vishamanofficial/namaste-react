
import React from "react";
import ReactDOM from "react-dom/client";

// jb hm React.createElement krte hai to wo ek react elemant hota hai naa ki html element aur ye react elemenet  hota hai ji ki ek object hai aur fir jb hm ise dom se render krte hain to html element create hota hai 

// const heading = React.createElement("h1", { id:"heading"}, "namaste react");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// ye koi developer friendly tareeka nahi hai, aise likhne se accha to html me likh le , is kami ko door krne ke liye facebook developers ne JSX laya

// -----------------------------------------------------------------


// this code is now written in jsx

// const jsxHeading = (<h1 className="jsxHeading">This is JSX Heading</h1>);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

// --------------------------------------------------------------

// React functional component

// const Title = () =>(
//     <h1>This is title component</h1>
//     );

// const HeadingComponent = () => (
    
//     <div id="container">
//         < Title />
//         {/* this is component composition */}
//         <h1>Namaste React Functional Component</h1>
//     </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent />);


// --------------------------------------------------------------

// you can use any javascript thing in functional component inside { anything like var, function }

const Title = (
    <h1>This is title component</h1>
    );

const HeadingComponent = () => (
    
    <div id="container">
        {Title}
        <h1>Namaste React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

