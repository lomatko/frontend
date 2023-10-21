import React from "react";
import '../style/login-styles.scss'
import Button from "@mui/material/Button";
import '../style/card-style.scss';
import Grid from "@mui/material/Grid";
import {CardComponent} from "./CardComponent";
import {RewardCardComponent} from "./RewardCardComponent";


export function RewardsView(props) {

    const AVAILABLE_COINS = 9;

    return (
        <div>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    props.rewards.map(card => {
                        return <Grid item xs={2}>
                            <RewardCardComponent
                                title={card.title}
                                coins={card.coins}
                                isBank={props.isBank}
                                userCoins={props.isBank? undefined : AVAILABLE_COINS}
                                description={card.description}
                                buttonMessage={props.buttonMessage}/>
                        </Grid>
                    })
                }
            </Grid>
        </div>
    );
}