import {CardComponent} from "./CardComponent";
import React, {useState, useEffect} from "react";
import Grid from '@mui/material/Grid';
import axios from "axios";

export function EventsComponent(props) {
    const[events, setEvents] = useState([]);

    // TODO: call to backend for list of events
    // --ALL EVENTS
    // -- USER EVENTS


    useEffect(() => {
        axios
            .get("https://backend-3u6yq4mi5q-ew.a.run.app/events")
            .then((response) => {
                console.log('response', response)
                setEvents(response.data)
            })
            .catch((err) => console.log(err));
    }, []);

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

    return (

        <div>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    events.map(event => {
                        return <Grid item xs={2}>
                            <CardComponent
                            title={event.title}
                            coins={event.coins}
                            description={event.description}
                            participants={event.participants}
                            time={convertDate(event)}
                            buttonMessage={props.buttonMessage}
                            isFinished={event.isFinished}
                            buttonHide={props.buttonHide}
                            location={event.location}/>
                        </Grid>
                    })
                }
            </Grid>
        </div>

    );
}