import {useState, useEffect} from 'react';
import api from '../api';

// Components
import PostPreview from '../components/PostPreview';

function Landing() {
    // Will also need to work with categories here as well to sort through specific posts
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = () => {
        api
            .get('/api/post/')
            .then((res) => res.data)
            .then((data) => setPosts(data))
            .catch((err) => {
                alert(err);
                console.log(err);
            });
    };

    return <div>
        {/* Add in welcoming information here */}
        <p>
            <a href="/register">Need to make an account?</a>
            <span> or </span>
            <a href="/login">Loging into an existing account.</a>
        </p>
        {/* Add in categories that everyone can see here */}
        <div>
            <h2>Posts</h2>
            {
                posts.map((post) => {
                    return <PostPreview post={post} auth={false} key={post.id}/>
                })
            }
        </div>
        {posts.length === 0 ? <p>There are no posts available right now.</p> : null}
    </div>
}

export default Landing;