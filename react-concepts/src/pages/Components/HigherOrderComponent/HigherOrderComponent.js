
function HigherOrderComponent(WrappedComponent) {
    return function ({ isLoading, ...props }) {
        if (isLoading) {
            return <div> HigherOrderComponent: isLoading is Enabled - Loading... </div>
        }
        return <WrappedComponent { ...props } />
    };
}

export default HigherOrderComponent; 
