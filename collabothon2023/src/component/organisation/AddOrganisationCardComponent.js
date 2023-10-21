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
            .post("https://backend-3u6yq4mi5q-ew.a.run.app/organizations", {
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

    const isDisabledButton = () => {
        return componentState.name === '' || componentState.description === '';
    }

    return (
        <div>
            <article className="plan [ card ]">
                <div className="inner" style={{background: 'rgb(242 193 46 / 29%'}}>
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
                    {/*<button className="button add-card-button" onClick={() => addOrganisation()}>*/}
                    {/*    Add Organisation*/}
                    {/*</button>*/}


                    {
                        isDisabledButton() ? <Button disabled style={{
                                color: 'white',
                                background: 'rgb(161,160,160)',
                                fontWeight: '600',
                                fontSize: '1.125rem',
                                textTransform: 'capitalize',
                                font: 'inherit'
                            }}>
                                Add Organisation
                            </Button> :
                            <button className="button add-card-button" onClick={() => addOrganisation()}>
                                Add Organisation
                            </button>
                    }

                </div>
            </article>
        </div>
    );
}