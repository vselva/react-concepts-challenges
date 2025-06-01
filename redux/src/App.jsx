import './App.css'
import { Provider } from 'react-redux'

import AddCustomer from './Customers/AddCustomer'
import ViewCustomers from './Customers/ViewCustomers'
import store from './store'

// Wraps the All components with Redux (Providers)
function App() {
    return (
        <>
            <Provider store={store}> 
                <AddCustomer /> 
                <ViewCustomers />
            </Provider>
        </>
    )
}

export default App
