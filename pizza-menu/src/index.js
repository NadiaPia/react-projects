import React from "react";
import ReactDom from "react-dom/client";

function App() {
    return <h1>Hello React!</h1>
}

// React v18
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><App /></React.StrictMode>) //React.StrictMode the only thing it does it is during development it renders our components twice to find certain bugs and also React will check if we are using updated parts of the React API

// React before v18
//React.render(<App />) and get rid of the client in import ReactDom from "react-dom";
