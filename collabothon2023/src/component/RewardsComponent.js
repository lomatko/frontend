import React, {useState, useEffect} from "react";
import '../style/login-styles.scss'
import Button from "@mui/material/Button";
import '../style/card-style.scss';
import Grid from "@mui/material/Grid";
import {CardComponent} from "./CardComponent";
import {RewardCardComponent} from "./RewardCardComponent";
import axios from "axios";
import {AddRewardCardComponent} from "./AddRewardCardComponent";


export function RewardsComponent(props) {
    const [rewards, setRewards] = useState([]);
    const [refreshCounter, setRefreshCounter] = useState(0);

    useEffect(() => {
        axios
            .get("https://backend-3u6yq4mi5q-ew.a.run.app/rewards")
            .then((response) => {
                setRewards(response.data)
            })
            .catch((err) => console.log(err));
    }, [refreshCounter]);


    const AVAILABLE_COINS = 9;

    const refreshData = () => {
        setRefreshCounter(refreshCounter + 1);
    }

    return (
        <div>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    rewards.map(reward => {
                        return <Grid item xs={2}>
                            <RewardCardComponent
                                title={reward.name}
                                coins={reward.price}
                                isBank={props.isBank}
                                userCoins={props.isBank? undefined : AVAILABLE_COINS}
                                description={reward.description}
                                buttonMessage={props.buttonMessage}/>
                        </Grid>
                    })
                }
                {
                    props.isBank &&  <Grid item xs={2}>
                        <AddRewardCardComponent callBack={() => refreshData()}/>
                    </Grid>
                }

            </Grid>
        </div>
    );
}