import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Main from "./components/Main";
import HomeDetails from "./components/HomeDetails";

function App() {
    return (
        <div className="App">
            <Main>
                <HomeDetails />
            </Main>
        </div>
    );
}

export default App;
