import React, {useState} from "react";
import '../../style/card-style.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from "axios";

export function AddOrganisationCardComponent(props) {
    const [componentState, setComponentState] = useState({
        name: '',
        description: '',
    })

    const changeName = (event) => {
        setComponentState({...componentState, name: event.target.value})
    }

    const changeDescription = (event) => {
        setComponentState({...componentState, description: event.target.value})
    }

    const addOrganisation = () => {
        axios
            .post("https://backend-3u6yq4mi5q-ew.a.run.app/organization", {
                name: componentState.name,
                description: componentState.description,
            })
            .then((response) => {
                console.log('response', response)
                setComponentState({
                    name: '',
                    description: '',
                })
                props.callBack();
            })
            .catch((err) => console.log(err));
    }

    return (
        <div>
            <article className="plan [ card ]">
                <div className="inner" style={{background: props.isFinished ? '#c1c1c1' : '#A9D9D0'}}>
                    <TextField
                        id="reward-name"
                        label="Name"
                        variant="standard"
                        value={componentState.name}
                        onChange={(event) => changeName(event)}
                    />
                    <TextField
                        id="reward-description"
                        label="Description"
                        variant="standard"
                        value={componentState.description}
                        onChange={(event) => changeDescription(event)}
                    />
                    <button className="button" onClick={() => addOrganisation()}>
                        Add Organisation
                    </button>
                </div>
            </article>
        </div>
    );
}