import {CardComponent} from "./CardComponent";
import React from "react";
import Grid from '@mui/material/Grid';
import {OrganisationsCardComponent} from "./OrganisationsCardComponent";

export function OrganisationComponent(props) {

    // TODO: call to backend for list of events
    // --ALL EVENTS
    // -- USER EVENTS

    return (

        <div>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    props.cards.map(card => {
                        return <Grid item xs={2}>
                            <OrganisationsCardComponent
                            title={card.title}
                            description={card.description}
                            buttonMessage={props.buttonMessage}/>
                        </Grid>
                    })
                }
            </Grid>
        </div>

    );
}