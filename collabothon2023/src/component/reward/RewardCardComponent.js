import React from "react";
import '../../style/card-style.scss';
import Button from '@mui/material/Button';
import axios from "axios";
import {API_URL} from "../../util/API-util";

export function RewardCardComponent(props) {
    console.log('userCoins', props.userCoins)
    console.log('coins', props.coins)
    console.log(props.userCoins < props.coins)

    const buyReward = () => {
        axios
            .post(API_URL + '/customers/1/rewards/' + props.rewardId, {})
            .then((response) => {
                // setComponentState({
                //     title: '',
                //     description: '',
                //     participants: 1,
                //     coins: 1,
                //     location: '',
                //     startDate: '2023-10-29T14:00:00.81523',
                //     endDate: '2023-10-29T16:00:00.81523',
                // })
                props.coinsCallback(response.data)
            })
            .catch((err) => console.log(err));
    }

    return (
        <div>
            <article className="plan [ card ]">
                <div className="inner" style={{background: props.isFinished ? '#c1c1c1' : '#A9D9D0'}}>
                    <span className="pricing">
                            {props?.coins === undefined ? 0 : props.coins} <img src={'./colab-coin.png'} style={{width: '30px'}}/>
                    </span>
                    <h2 className="title">{props.title}</h2>
                    <p className="info">{props.description}</p>


                    {
                        props.userCoins === undefined && <button className="button" onClick={() => buyReward()}>{props.buttonMessage}</button>
                    }

                    {
                        props.userCoins >= props.coins && <button className="button" onClick={() => buyReward()}>{props.buttonMessage}</button>
                    }

                    {
                        props.userCoins < props.coins && <Button disabled style={{
                            color: 'white',
                            background: 'rgb(161,160,160)',
                            fontWeight: '500',
                            fontSize: '1.125rem',
                            textTransform: 'capitalize',
                            font: 'inherit'
                        }}>
                            Not Enough Coins
                        </Button>
                    }
                </div>
            </article>
        </div>
    );
}