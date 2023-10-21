import React from "react";
import '../../style/card-style.scss';
import Button from '@mui/material/Button';
import axios from "axios";
import {API_URL} from "../../util/API-util";
import SvgIcon from '@mui/material/SvgIcon';

export function EventCardComponent(props) {

    const buttonClick = () => {
        if (props.buttonMessage === 'Leave') {
            leaveEvent()
        } else {
            joinToEvent();
        }
    }

    const joinToEvent = () => {
        axios
            .post(API_URL + "/events/" + props.eventId + "/1")
            .then((response) => {
                console.log('response', response);
            })
            .catch((err) => console.log(err));
    }

    const leaveEvent = () => {
        axios
            .delete(API_URL + "/events/" + props.eventId + "/1")
            .then((response) => {
                console.log('response', response);
            })
            .catch((err) => console.log(err));
    }

    return (
        <div>
            <article className="plan [ card ]">
                {/*<img src="/colab-coin.png" alt="image" />*/}
                <div className="inner" style={{background: props.isFinished ? '#c1c1c1' : '#A9D9D0'}}>
                    {/*<div style={{width: '25px', backgroundImage: 'url(/colab-coin.png)'}}> </div>*/}
                    <span className="pricing">

                         {props?.coins === undefined ? 0 : props.coins} <img src={'./colab-coin.png'} style={{width: '30px', marginLeft: '10px'}}/>
                    </span>
                    <h2 className="title">{props.title}</h2>
                    <p className="info">{props.description}</p>
                    <ul className="features">
                        <li>
                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="none" d="M0 0h24v24H0z"/>
                                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                                          fill="currentColor"/>
                                </svg>
                            </span>
                            <span><strong>{props.participants}</strong> participants</span>
                        </li>
                        <li>
                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="none" d="M0 0h24v24H0z"/>
                                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                                          fill="currentColor"/>
                                </svg>
                            </span>
                            <span> <strong>{props.time}</strong></span>
                        </li>
                        <li>
                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="none" d="M0 0h24v24H0z"/>
                                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                                          fill="currentColor"/>
                                </svg>
                            </span>
                            <span><strong>{props.location}</strong></span>
                        </li>
                    </ul>
                    {
                        !props.buttonHide && props.isFinished &&
                        <Button disabled={props.isFinished} style={{color: 'white', background: 'rgb(161,160,160)'}}>Not
                            Active</Button>
                    }
                    {
                        !props.buttonHide && !props.isFinished &&
                        <button className="button" onClick={() => buttonClick()}>{props.buttonMessage}</button>
                    }
                </div>
            </article>
        </div>
    );
}