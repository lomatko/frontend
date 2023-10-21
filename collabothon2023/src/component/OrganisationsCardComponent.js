import React from "react";
import '../style/card-style.scss';
import Button from '@mui/material/Button';

export function OrganisationsCardComponent(props) {

    return (
        <div>
            <article className="plan [ card ]">
                <div className="inner" style={{background: props.isFinished ? '#c1c1c1' : '#A9D9D0'}}>
                    <h2 className="title">{props.title}</h2>
                    <p className="info">{props.description}</p>
                    <button className="button">{props.buttonMessage}</button>
                </div>
            </article>
        </div>
    );
}