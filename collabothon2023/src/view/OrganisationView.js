import React from "react";
import '../style/login-styles.scss'
import {TabMenuComponent} from "../component/TabMenuComponent";
import {EventsComponent} from "../component/event/EventsComponent";
import {ORGANISATION_CARDS} from "../util/events-jsons";

const TABS = [
    {name: 'Your Events', component: <EventsComponent url={'/organizations/1/events'} buttonMessage={'Remove Event'} isOrganisation={true} buttonHide={true}/>}]

export function OrganisationView() {

    return (<TabMenuComponent tabs={TABS}/>);
}