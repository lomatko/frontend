import React from "react";
import '../style/login-styles.scss';
import {TabMenuComponent} from "../component/TabMenuComponent";
import {LoginView} from "./LoginView";
import {EventsComponent} from "../component/event/EventsComponent";
import {ALL_ACTIVE_CARDS, USER_CARDS} from "../util/events-jsons";
import {RewardsComponent} from "../component/reward/RewardsComponent";
import {ALL_REWARDS_CARDS} from "../util/rewards-jsons";

const TABS = [
    {name: 'Events', component: <EventsComponent url={'/events'} buttonMessage={'Join Event'}/>},
    {name: 'Your Events', component: <EventsComponent url={'/customers/1/events'} buttonMessage={'Leave'}/>},
    {name: 'Coin Market', component: <RewardsComponent  buttonMessage={'Buy'} isBank={false}/>}]

export function ClientView() {

    return (<TabMenuComponent tabs={TABS}/>);
}