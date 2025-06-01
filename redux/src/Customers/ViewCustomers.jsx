import { useDispatch, useSelector } from "react-redux"
import { deleteCustomer } from "../slices/customerSlice";

export default function ViewCustomers() {
    // useSelector to get the customers
    const customers = useSelector( state => state.customers );
    console.log('customers:', customers);

    // useDispatch to delete a customer 
    const dispatch = useDispatch();
    
    const deleteHander = (index) => {
        console.log('Deleting..', index);
        const deleteAcion = deleteCustomer(index);
        dispatch(deleteAcion);
    }

    return (
        <div className="container mt-4">
            <h1 className="mb-4 text-primary">Customers:</h1>
            <ul className="list-group">
                {customers && customers.map((customer, index) => (
                    <li
                        key={index}
                        className="list-group-item d-flex justify-content-between align-items-center"
                    >
                        <span>{customer}</span>
                        <button
                            type="button"
                            onClick={() => deleteHander(index)}
                            className="btn btn-danger btn-sm"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
