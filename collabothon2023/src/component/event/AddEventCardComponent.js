import React, {useState} from "react";
import '../../style/card-style.scss';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";

export function AddEventCardComponent(props) {
    const [componentState, setComponentState] = useState({
        title: '',
        description: '',
        participants: 1,
        coins: 1,
        location: '',
        startTime: '2023-10-29T14:00:00.81523',
        endTime: '2023-10-29T16:00:00.81523',
    })

    const changeTitle = (event) => {
        setComponentState({...componentState, title: event.target.value})
    }

    const changeDescription = (event) => {
        setComponentState({...componentState, description: event.target.value})
    }

    const changeCoins = (event) => {
        setComponentState({...componentState, coins: event.target.value})
    }

    const changeParticipants = (event) => {
        setComponentState({...componentState, participants: event.target.value})
    }

    const changeLocation = (event) => {
        setComponentState({...componentState, location: event.target.value})
    }

    const addEvent = () => {
        let data = {
            title: componentState.title,
            description: componentState.description,
            participants: componentState.participants,
            coins: componentState.coins,
            location: componentState.location,
            startTime: componentState.startTime,
            endTime: componentState.endTime,
        };

        console.log('event data to add', data)

        // axios
        //     .post("https://backend-3u6yq4mi5q-ew.a.run.app/events", {
        //         name: componentState.name,
        //         description: componentState.description,
        //         price: componentState.price
        //     })
        //     .then((response) => {
        //         console.log('response', response)
        //         setComponentState({
        //             name: '',
        //                 description: '',
        //                 price: 1,
        //         })
        //         props.callBack();
        //     })
        //     .catch((err) => console.log(err));
    }

    const isDisabledButton = () => {
        return componentState.location === '' || componentState.title === '' || componentState.description === '';
    }

    return (
        <div>
            <article className="plan [ card ]">
                <div className="inner" style={{background: props.isFinished ? '#c1c1c1' : '#A9D9D0'}}>
                    <TextField
                        id="event-name"
                        label="Name"
                        variant="standard"
                        value={componentState.title}
                        onChange={(event) => changeTitle(event)}
                    />
                    <TextField
                        id="reward-description"
                        label="Description"
                        variant="standard"
                        value={componentState.description}
                        onChange={(event) => changeDescription(event)}
                    />
                    <TextField
                        id="standard-participants"
                        label="Participants"
                        variant="standard"
                        type="number"
                        InputProps={{inputProps: {min: 1}}}
                        value={componentState.participants}
                        onChange={(event) => changeParticipants(event)}/>
                    <TextField
                        id="standard-price"
                        label="Price/Coins"
                        variant="standard"
                        type="number"
                        InputProps={{inputProps: {min: 1}}}
                        value={componentState.coins}
                        onChange={(event) => changeCoins(event)}/>
                    <TextField
                        id="standard-price"
                        label="Location"
                        variant="standard"
                        type="standard"
                        value={componentState.location}
                        onChange={(event) => changeLocation(event)}/>
                    <TextField
                        id="standard-price"
                        label="Time"
                        variant="standard"
                        type="standard"
                        disabled
                        value={'29/10/2023 14:00-16:00'}/>


                    {
                        isDisabledButton() ? <Button disabled style={{
                            color: 'white',
                            background: 'rgb(161,160,160)',
                            fontWeight: '600',
                            fontSize: '1.125rem',
                            textTransform: 'capitalize',
                            font: 'inherit'
                        }}>
                            Add Event
                        </Button> :
                            <button className="button" onClick={() => addEvent()}>
                                Add Event
                            </button>
                    }
                </div>
            </article>
        </div>
    );
}