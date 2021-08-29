import Form from "./Form";

const RenderForm = (props) => {

    const returnUser = (data) => {
        props.getUserData(data);
    }

    return (
        <Form returnUser={returnUser}></Form>
    )    
}

export default RenderForm;