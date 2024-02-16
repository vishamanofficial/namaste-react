// in episode 2 part 2 akshay will tell that how to use react using npm and by importing react from node module folder 
import React from "react";
import ReactDOM from "react-dom/client";

// ye sbse phle ek heading banayega aur fir usme Namaste react ko daal dega , React.createElement me 3 value paas hoti hai, pahla Tag ya element, doosra object jisme element ke liye id classes aur aurbhi aisi chezen paas hoti hain, aur teesre me jo us tag ya element me dalna hai wo

// const heading = React.createElement(
//     "h1",
//     { id:"heading", someAttribute:"valueoOfThatAttribute" },
//     "Namaste React"
// );

// ye ek DOM root banayega react ke liye ki kaha pe store karna hai heading ko , basically HTML ke id tk le jayega

// const root = ReactDOM.createRoot(document.getElementById("root"));

// ye render karega const heading ko

// root.render(heading);



// --------------------------------------------------------------------



// const para = React.createElement(
//     "p",
//     {id:"para"},
//     "ye sbse phle ek heading banayega aur fir usme Namaste react ko daal dega , React.createElement me 3 value paas hoti hai, pahla Tag ya element, doosra object jisme element ke liye id classes aur aurbhi aisi chezen paas hoti hain, aur teesre me jo us tag ya element me dalna hai wo"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(para);


// -------------------------------------------------------------------



// neeche ka jo code hai wo nested element create krne ke liye hai jaise div ke and doosra div fir uske andr kuch element


// const parent = React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement(
//         "div",
//         {id:"child"},
//         React.createElement(
//             "h1",
//             {},
//             "i am an nested element"
//         )
//     )

// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);


// --------------------------------------------------------------------


// par agar us child element ka koi sibling create kara hai to?? uske liye tumhe child emements to array me store karana hoga
// but if you do that react will throw an error somethng "key" , we will resolve it in the future


// const parent = React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement(
//         "div",
//         {id:"child"},
//         [
//             React.createElement(
//             "h1",
//             {},
//             "i am an nested h1 element"
//             ),
//             React.createElement(
//             "h2",
//             {},
//             "i am an nested h2 element"
//             )

//         ]
//     )

// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);


// -------------------------------------------------------------------------


// ab agar child elements ko double krna ho to

const parent = React.createElement(
    "div",
    {id:"parent"},
    [ React.createElement("div",{id:"child1"},
            [ React.createElement("h1",{},"i am an nested h1 element"),
                React.createElement("h2",{},"i am an nested h2 element")
            ]),
        React.createElement("div",{id:"child2"},
            [ React.createElement("h1",{},"i am an nested h1 element"),
                React.createElement("h2",{},"i am an nested h2 element")
            ])
    ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


// ------------------------------------------------------------------------


// ye kitna messi ho ggya hai naaa , iske liye JSX hai jo ki hm agle episode me padhenge      for now stick to this   , JSX bs kaam aasaan krta hai but uska core yhi javascript hi hai

// -------------------------------------------------



