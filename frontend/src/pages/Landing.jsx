// Components
import AllPosts from '../components/AllPosts';

function Landing() {
    return <div>
        {/* Add in welcoming information here */}
        <div>
            <a href="/register">Need to make an account?</a>
            <a href="/login">Logging in to existing account.</a>
        </div>
        {/* Will need to add in a sorter for sorting posts by category */}
        <AllPosts/>
    </div>
}


export default Landing;