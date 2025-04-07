import { useState } from "react";

import GoalList from "./GoalList";
import NewGoal from "./NewGoal";

// This component holds the goal list and allows adding new goals
function Goals () {
    // State to store goals array
    const [ goals, setGoals ] = useState([]);

    // Handler function to add new goal
    const addNewGoalHandler = (newGoal) => {
        // Using previous state to ensure safe updates
        setGoals((previousGoal) => previousGoal.concat(newGoal));
    }

    // Handler function for deleting a goal
    const deleteGoalHandler = (id) => {
        setGoals((prevGoals) => prevGoals.filter(prevGoal => prevGoal.id !== id));
    }

    return <>
        <h2> This is Goals Project with React </h2>
        <NewGoal onAddGoal={addNewGoalHandler} />
        <GoalList goals={goals} onDeleteGoal={deleteGoalHandler} />
    </>
}

export default Goals;
