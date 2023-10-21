import React from "react";
import '../style/login-styles.scss'
import {TabMenuComponent} from "../component/TabMenuComponent";
import {ALL_ACTIVE_CARDS} from "../util/events-jsons";
import {EventsComponent} from "../component/EventsComponent";
import {ALL_REWARDS_CARDS} from "../util/rewards-jsons";
import {RewardsView} from "../component/RewardsView";

const TABS = [
    {name: 'Organisations'},
    {name: 'Events', component: <EventsComponent cards={ALL_ACTIVE_CARDS} buttonHide={true}/>},
    {name: 'Coin Market', component: <RewardsView rewards={ALL_REWARDS_CARDS} buttonMessage={'Remove'} isBank={true}/>}]

export function BankView() {

    return (
        <TabMenuComponent tabs={TABS}/>
    );
}