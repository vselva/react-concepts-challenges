import { useState } from "react"
import { addCustomer as addCustomerAction } from "../slices/customerSlice";
import { useDispatch } from "react-redux";

export default function AddCustomer() {
    // const [ customers, setCustomers ] = useState([]);
    const [ name, setName ] = useState('');

    // useDispatch to add customer
    const dispatch = useDispatch();

    const addCustomerName = () => {
        if (name) {
            // setCustomers((customers) => [...customers, name]);
            // create dispatch function 

            // Create add customer action with 
            // the 'addCustomerAction' (action creator function)
            const addAction = addCustomerAction(name); 
            
            // dispatch the action to appropriate reducer 
            dispatch(addAction);
            console.log('dispatched:', name);
            setName('');
        }
    }

    return (
        <>
            <h1 className="mb-4">Add Customer:</h1>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Enter customer name"
                />
            </div>
            <button
                type="button"
                className="btn btn-primary"
                onClick={addCustomerName}
            >
                Add
            </button>
        </>
    )
}


