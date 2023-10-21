import React, {useEffect, useState} from "react";
import '../style/login-styles.scss';
import {TabMenuComponent} from "../component/TabMenuComponent";
import {EventsComponent} from "../component/event/EventsComponent";
import {RewardsComponent} from "../component/reward/RewardsComponent";
import axios from "axios";
import {API_URL} from "../util/API-util";



export function ClientView() {
    const [userCoins, setUserCoins] = useState(0)

    useEffect(() => {
        axios
            .get(API_URL + '/customers/1')
            .then((response) => {
                console.log('user details', response.data)
                setUserCoins(response.data.coins)
            })
            .catch((err) => console.log(err));
    }, []);

    const updateCoins = (coins) => {
        setUserCoins(coins);
    }

    const TABS = [
        {name: 'Events', component: <EventsComponent url={'/events'} buttonMessage={'Join Event'} coinsCallBack={updateCoins}/>},
        {name: 'Your Events', component: <EventsComponent url={'/customers/1/events'} buttonMessage={'Leave'} coinsCallBack={updateCoins}/>},
        {name: 'Coin Market', component: <RewardsComponent  buttonMessage={'Buy'} isBank={false} coinsCallBack={updateCoins}/> }]

    return (<TabMenuComponent tabs={TABS} isClientPanel={true} userCoins={userCoins}/>);
}