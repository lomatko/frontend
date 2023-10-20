import {CardComponent} from "./CardComponent";
import React from "react";
import Grid from '@mui/material/Grid';

export function EventsComponent(props) {

    // TODO: call to backend for list of events
    // --ALL EVENTS
    // -- USER EVENTS

    return (

        <div>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    props.cards.map(card => {
                        return <Grid item xs={2}>
                            <CardComponent
                            title={card.title}
                            coins={card.coins}
                            description={card.description}
                            participants={card.participants}
                            time={card.time}
                            buttonMessage={props.buttonMessage}
                            isFinished={card.isFinished}
                            buttonHide={props.buttonHide}
                            location={card.location}/>
                        </Grid>
                    })
                }
            </Grid>
        </div>

    );
}