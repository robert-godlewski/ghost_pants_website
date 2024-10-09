import {useState, useEffect} from 'react';
import api from '../api';

// Components
import PostPreview from './PostPreview';

function AllPosts() {
    // Will also need to work with categories here as well to sort through the posts
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts();
    }, [])

    const getPosts = () => {
        api
            .get('/api/post/')
            .then((res) => res.data)
            .then((data) => setPosts(data))
            .catch((err) => alert(err));
    };

    return <div>
        <h2>Posts</h2>
        {
            posts.map((post) => {
                return <PostPreview post={post} key={post.id}/>
            })
        }
        {posts.length === 0 ? <p>There are no posts available right now.</p> : null}
    </div>
}

export default AllPosts;