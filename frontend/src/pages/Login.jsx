import Form from "../components/Form";

function Login() {
    return <>
        <Form route='/api/token/' method='login'/>
        <p>Do not have an account <a href="/register">click here to register</a>.</p>
    </>
}

export default Login;