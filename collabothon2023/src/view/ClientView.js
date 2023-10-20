import React from "react";
import '../style/login-styles.scss';
import {TabMenuComponent} from "../component/TabMenuComponent";
import {LoginView} from "./LoginView";
import {EventsComponent} from "../component/EventsComponent";
import {ALL_ACTIVE_CARDS, USER_CARDS} from "../util/events-jsons";

const TABS = [
    {name: 'Events', component: <EventsComponent cards={ALL_ACTIVE_CARDS}/>},
    {name: 'Your Events', component: <EventsComponent cards={USER_CARDS}/>},
    {name: 'Coin Market', component: <LoginView/>}]

export function ClientView() {

    return (<TabMenuComponent tabs={TABS}/>);
}