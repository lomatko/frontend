import './App.css';
import {LoginView} from './view/LoginView';
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ClientView} from "./view/ClientView";
import {BankView} from "./view/BankView";
import {OrganisationView} from "./view/OrganisationView";

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<LoginView/>}/>
                    <Route path="/client" element={<ClientView/>}/>
                    <Route path="/bank" element={<BankView/>}/>
                    <Route path="/organisation" element={<OrganisationView/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
