import React, {useEffect, useState} from "react";
import Grid from '@mui/material/Grid';
import {OrganisationsCardComponent} from "./OrganisationsCardComponent";
import axios from "axios";
import {AddOrganisationCardComponent} from "./AddOrganisationCardComponent";

export function OrganisationComponent(props) {
    const [organisations, setOrganisations] = useState([]);
    const [refreshCounter, setRefreshCounter] = useState(0);

    useEffect(() => {
        axios
            .get("https://backend-3u6yq4mi5q-ew.a.run.app/organization")
            .then((response) => {
                setOrganisations(response.data)
            })
            .catch((err) => console.log(err));
    }, [refreshCounter]);

    const refreshData = () => {
        setRefreshCounter(refreshCounter + 1);
    }

    return (

        <div>
            <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                {
                    organisations.map(organisation => {
                        return <Grid item xs={2}>
                            <OrganisationsCardComponent
                                title={organisation.name}
                                description={organisation.description}
                                buttonMessage={props.buttonMessage}/>
                        </Grid>
                    })
                }

                <Grid item xs={2}>
                    <AddOrganisationCardComponent callBack={() => refreshData()}/>
                </Grid>

            </Grid>
        </div>

    );
}