import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPages";


function App() {
    return (
        <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />   
            </Routes>
        </BrowserRouter>
        </div>
    );
}

export default App;
