import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

/**
const heading = React.createElement("h1",{id:"heading"},"React Learning");

// React Element
const jsxHeading = <h1 id="heading">React Learning using JSX</h1>

// React Functional Component
const Title = () => (
    <h1 className="head" tabIndex="5">
        React using JSX 🚀
    </h1>
);

//Component Composition - One component into another
const HeadingComponent = () => (
    <div>
        <Title />
        <h1 className="heading">React Functional Component</h1>
    </div>
);

//inserting React Element inside React Component
const HeadingComponent2 = () => (
    <div>
        {jsxHeading}
        <h1 className="heading">React Functional Component</h1>
    </div>
);
*/


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);