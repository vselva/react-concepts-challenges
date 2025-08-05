export default function Wrapper({ Component }) {
    
    return <>
        <h3>Rendering the Component which is passed as Props</h3>
        <Component />
    </>
}
