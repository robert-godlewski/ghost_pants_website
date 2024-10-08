import Form from '../components/Form';

function Register() {
    return <>
        <Form route='/api/user/register/' method='register'/>
        <p>Already have an account <a href="/login">click here to login</a>.</p>
    </>
}

export default Register;