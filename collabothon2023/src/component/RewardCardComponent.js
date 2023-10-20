import React from "react";
import '../style/card-style.scss';
import Button from '@mui/material/Button';

export function RewardCardComponent(props) {

    return (
        <div>
            <article className="plan [ card ]">
                <div className="inner" style={{background: props.isFinished ? '#c1c1c1' : '#A9D9D0'}}>
                    <span className="pricing">
                        <span>
                            CC {props?.coins === undefined ? 0 : props.coins}
                        </span>
                    </span>
                    <h2 className="title">{props.title}</h2>
                    <p className="info">{props.description}</p>


                    {
                        props.userCoins === undefined && <button className="button">{props.buttonMessage}</button>
                    }

                    {
                        props.userCoins >= props.coins && <button className="button">{props.buttonMessage}</button>
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
                            You need more Coins
                        </Button>
                    }
                </div>
            </article>
        </div>
    );
}