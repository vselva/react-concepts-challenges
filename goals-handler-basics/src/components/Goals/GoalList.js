function GoalList (props) {
    const goalDeleteHandler = (id) => {
        console.log(id);
        props.onDeleteGoal(id);
    }

    // If no goals, show fallback message
    if (props.goals.length && props.goals.length === 0) {
        return <p>No goals added yet!</p>;
    }

    // Otherwise, render the list
    return <>
        <ul className="goal-list list-group mt-3">{
            props.goals.map((goal) => {
                return <li key={goal.id} className="list-group-item d-flex justify-content-between align-items-center">
                <span>{goal.title}</span>
                <div>
                  <button className="btn btn-sm btn-outline-danger" id={goal.id} onClick={() => goalDeleteHandler(goal.id)}>Delete</button>
                </div>
              </li>
            })
        }</ul>
    </>
}

export default GoalList;
