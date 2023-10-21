import {EventCardComponent} from "./EventCardComponent";
import React, {useState, useEffect} from "react";
import Grid from '@mui/material/Grid';
import axios from "axios";
import {API_URL} from "../../util/API-util";
import {AddEventCardComponent} from "./AddEventCardComponent";
import {ALL_ACTIVE_CARDS, USER_CARDS} from "../../util/events-jsons";

export function EventsComponent(props) {
    const [events, setEvents] = useState([]);
    const [refreshCounter, setRefreshCounter] = useState(0);

    useEffect(() => {
        axios
            .get(API_URL + props.url)
            .then((response) => {
                console.log('events response', response)
                setEvents(response.data)
            })
            .catch((err) => console.log(err));
    }, [refreshCounter]);

    const convertDate = (event) => {
        return formattedDate(event.startDate) + ' '
            + getFormattedTime(event.startDate) + '-'
            + getFormattedTime(event.endDate);
    }

    function formattedDate(date) {
        let d = new Date(date)
        let month = String(d.getMonth() + 1);
        let day = String(d.getDate());
        const year = String(d.getFullYear());

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return `${day}/${month}/${year}`;
    }

    function getFormattedTime(date) {
        let d = new Date(date);
        let hour = String(d.getHours())
        let minutes = String(d.getMinutes())

        if (hour.length < 2) hour = '0' + hour;
        if (minutes.length < 2) minutes = '0' + minutes;

        return `${hour}:${minutes}`;
    }

    const refreshData = () => {
        setRefreshCounter(refreshCounter + 1);
    }


    // TODO: use data from backend
    return (

        <div>
            <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                {
                    events.map(event => {
                        return <Grid item xs={2}>
                            <EventCardComponent
                                eventId={event.id}
                                title={event.title}
                                coins={event.coins}
                                description={event.description}
                                participants={event.participants}
                                time={convertDate(event)}
                                buttonMessage={props.buttonMessage}
                                isFinished={event.status === 'COMPLETED'}
                                buttonHide={props.buttonHide}
                                location={event.location}/>
                        </Grid>
                    })
                }


                {props.isOrganisation &&
                    <Grid item xs={2}>
                        <AddEventCardComponent callBack={() => refreshData()}/>
                    </Grid>
                }
            </Grid>
        </div>

    );
}