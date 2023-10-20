import React from "react";
import '../style/login-styles.scss'
import {TabMenuComponent} from "../component/TabMenuComponent";
import {ALL_ACTIVE_CARDS} from "../util/events-jsons";
import {EventsComponent} from "../component/EventsComponent";

const TABS = [
    {name: 'Organisations'},
    {name: 'Events', component: <EventsComponent cards={ALL_ACTIVE_CARDS}/>},
    {name: 'Coin Market'}]

export function BankView() {

    return (
        <TabMenuComponent tabs={TABS}/>
    );
}