/* eslint-disable react/prop-types */
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import api from '../api';

// Style sheets
import '../styles/Home.css';

function Home() {
    // Need to add in categories
    // Posts
    // This is just all of the draft posts that the user can edit
    // eslint-disable-next-line react/prop-types
    // const {draftPosts, setDraftPosts} = props;
    // This is all of the published posts
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // getDraftPosts();
        getPosts();
    }, []);

    // Might need this later on
    // const getDraftPosts = () => {
    //     api.get('/api/posts/drafts/').then((res) => {
    //         console.log(res);
    //         console.log(res.data);
    //         setDraftPosts(res.data);
    //     }).catch((err) => console.log(err));
    // };

    // fix this so that it only gets published posts only
    const getPosts = () => {
        api
            .get('/api/post/')
            .then((res) => setPosts(res.data))
            .catch((err) => console.log(err));
    };

    const deletePost = (slug) => {
        api.delete(`/api/post/delete/${slug}/`).then((res) => {
            if (res.status === 204) {
                // alert('Post deleted!');
                console.log(`Deleted post with 204`);
            }
            console.log(`Deleted post with slug = ${slug}`);
            getPosts();
        }).catch((err) => {
            // alert(err);
            console.log(err);
        });
    };

    return <div>
        <a href='/logout'>Logout</a>
        {/* Add in categories that everyone can see here */}
        <div>
            <h2>Your Draft Posts</h2>
            {/*
                draftPosts.map((post) => {
                    return <PostPreview post={post} auth={true} method={'draft'} key={post.id}/>
                })
            */}
            {/* draftPosts.length === 0 ? <p>There are no draft posts available right now. ***Need to fix this***</p> : null */}
            <p>***FIX THIS SECTION***</p>
            <a href='/post/create'>New Draft Post</a>
        </div>
        <div>
            <h2>Posts</h2>
            {
                posts.map((post) => {
                    return <div key={post.id}>
                        <h4>{post.title}</h4>
                        <p>{post.subtitle}</p>
                        <div>
                            <Link to={`/post/read/${post.slug}/`}>Read</Link>
                            <span> | </span>
                            <Link to={`/post/edit/${post.slug}/`}>Edit</Link>
                            <button onClick={() => deletePost(post.slug)}>Delete</button>
                        </div>
                    </div>
                })
            }
            {posts.length === 0 ? <p>There are no posts available right now.</p> : null}
        </div>
    </div>
}

export default Home;