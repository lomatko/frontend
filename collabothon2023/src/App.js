import './App.css';
import {LoginView} from './view/LoginView';
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ClientView} from "./view/ClientView";
import {BankView} from "./view/BankView";
import {OrganisationView} from "./view/OrganisationView";
import {MainTabMenuComponent} from "./component/MainTabMenuComponent";
import {TabMenuComponent} from "./component/TabMenuComponent";
const MAIN_TABS = [
    {name: 'CLient', component: <ClientView/>},
    {name: 'Organisation', component: <OrganisationView/>},
    {name: 'Bank', component: <BankView/>}]

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<LoginView/>}/>

                    <Route path="/client" element={<MainTabMenuComponent tabs={MAIN_TABS}/>}/>
                    <Route path="/bank" element={<MainTabMenuComponent tabs={MAIN_TABS}/>}/>
                    <Route path="/organisation" element={<MainTabMenuComponent tabs={MAIN_TABS}/>}/>
                    {/*<Route path="/client" element={<ClientView/>}/>*/}
                    {/*<Route path="/bank" element={<BankView/>}/>*/}
                    {/*<Route path="/organisation" element={<OrganisationView/>}/>*/}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
