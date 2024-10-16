import CatPosts from "../components/CatPosts";

function Landing() {
    return <div>
        {/* Add in welcoming information here */}
        <div>
            <a href="/register">Need to make an account?</a>
            <a href="/login">Loggin into an existing account.</a>
        </div>
        <CatPosts/>
        {/* Add in all of the categories and post views here */}
    </div>
}

export default Landing;