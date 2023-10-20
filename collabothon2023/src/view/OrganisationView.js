import React from "react";
import '../style/login-styles.scss'
import {TabMenuComponent} from "../component/TabMenuComponent";
import {EventsComponent} from "../component/EventsComponent";
import {ORGANISATION_CARDS} from "../util/events-jsons";

const TABS = [{name: 'Your Events', component: <EventsComponent cards={ORGANISATION_CARDS}/>}]

export function OrganisationView() {

    return (<TabMenuComponent tabs={TABS}/>);
}