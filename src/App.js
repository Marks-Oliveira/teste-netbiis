import React from "react";
import Home from "./pages/home";
import TodoProvider from "./contexts/todo.context";
import GlobalStyle from "./theme";

function App() {
    return (
        <TodoProvider>
            <div>
                <GlobalStyle />
                <Home></Home>
            </div>
        </TodoProvider>
    );
}

export default App;