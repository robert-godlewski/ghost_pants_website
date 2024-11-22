import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import api from '../api';

function Landing() {
    // eslint-disable-next-line react/prop-types
    // Will also need to work with categories here as well to sort through specific posts
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = () => {
        api
            .get('/api/post/')
            .then((res) => setPosts(res.data))
            .catch((err) => console.log(err));
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
                    return <div key={post.id}>
                        <h4>{post.title}</h4>
                        <p>{post.subtitle}</p>
                        <Link to={`/post/read/${post.slug}/`}>Read</Link>
                    </div>
                })
            }
        </div>
        {posts.length === 0 ? <p>There are no posts available right now.</p> : null}
    </div>
}

export default Landing;