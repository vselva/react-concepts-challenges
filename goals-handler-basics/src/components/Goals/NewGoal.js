import { useState } from "react";

function NewGoal(props) {
    // Local state to hold current input value
    const [ goalTitle, setGoalTitle ] = useState('');

    // Updates goalTitle state as user types
    const goalTitleChangeHandler = (e) => {
        setGoalTitle(e.target.value);
    }

    // Called when form is submitted
    const addGoalHandler = (e) => {
        e.preventDefault();
        if (goalTitle.trim().length === 0) return;

        // New Goal
        const newGoal = {
            id: Math.random().toString(),
            title: goalTitle
        }
        props.onAddGoal(newGoal); // Send new goal to parent

        setGoalTitle(''); // Reset input field
    }

    return <>
        <form onClick={addGoalHandler}>
            <input type="text" value={goalTitle} onChange={goalTitleChangeHandler} className="form-control"/>
            <button type="submit" className="btn btn-primary"> Add Goal </button>
        </form>
    </>
}

export default NewGoal;
