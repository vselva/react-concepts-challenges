
export default function Child(props) {

    return <>
        <p>
            Received the props: <br />
            props.id = {props.id}, props.name = {props.name}
        </p>
    </>
}