import React from "react";
import '../style/login-styles.scss';
import {TabMenuComponent} from "../component/TabMenuComponent";
import {LoginView} from "./LoginView";
import {EventsComponent} from "../component/EventsComponent";
import {ALL_ACTIVE_CARDS, USER_CARDS} from "../util/events-jsons";
import {RewardsComponent} from "../component/RewardsComponent";
import {ALL_REWARDS_CARDS} from "../util/rewards-jsons";

const TABS = [
    {name: 'Events', component: <EventsComponent cards={ALL_ACTIVE_CARDS} buttonMessage={'Join Event'}/>},
    {name: 'Your Events', component: <EventsComponent cards={USER_CARDS} buttonMessage={'Leave'}/>},
    {name: 'Coin Market', component: <RewardsComponent rewards={ALL_REWARDS_CARDS} buttonMessage={'Buy'} isBank={false}/>}]

export function ClientView() {

    return (<TabMenuComponent tabs={TABS}/>);
}