import React from "react";
import '../style/login-styles.scss'
import {TabMenuComponent} from "../component/TabMenuComponent";
import {ALL_ACTIVE_CARDS} from "../util/events-jsons";
import {EventsComponent} from "../component/event/EventsComponent";
import {ALL_REWARDS_CARDS} from "../util/rewards-jsons";
import {RewardsComponent} from "../component/reward/RewardsComponent";
import {OrganisationsCardComponent} from "../component/organisation/OrganisationsCardComponent";
import {OrganisationComponent} from "../component/organisation/OrganisationComponent";
import {ALL_ORGANISATIONS} from "../util/organisation-json";

const TABS = [
    {name: 'Organisations', component: <OrganisationComponent cards={ALL_ORGANISATIONS} buttonMessage={'Remove'}/>},
    {name: 'Events', component: <EventsComponent url={'/events'} buttonHide={true}/>},
    {name: 'Coin Market', component: <RewardsComponent rewards={ALL_REWARDS_CARDS} buttonMessage={'Remove'} isBank={true}/>}]

export function BankView() {

    return (
        <TabMenuComponent tabs={TABS}/>
    );
}