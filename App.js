import React from "react";
import ReactDOM from "react-dom";

//React Element
const jsxHeading=<h1 id="heading" className="head" tabIndex="1">Namaste React using JSX🤖</h1>;

//React Component

const Title=()=>(
    <h1 className="head" tabIndex="5">
        Namaste React using Title
    </h1>
);

const num=100;
const HeadingComponent=()=>(
    <div id="container">
        {jsxHeading}
        <Title/>
        {
            <h3>Hello from curly inside JSX {num}</h3>
        }
        <h1>Namaste React Functional Component</h1>
    </div>
    
);

const root=ReactDOM.createRoot(document.getElementById("root"));

//render react element
//root.render(jsxHeading);

//render functional components
root.render(<HeadingComponent/>);