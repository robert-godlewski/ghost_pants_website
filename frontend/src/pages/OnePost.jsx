import {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import api from '../api';

/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
function OnePost() {
    const {slug} = useParams();
    const [post, setPost] = useState({});

    const navigate = useNavigate();
    const formattedCreatedDate = new Date(post.created_at).toLocaleDateString('en-US');
    const formattedUpdateDate = new Date(post.updated_at).toLocaleDateString('en-US');
    const formattedPublishedDate = post.publish_date ? new Date(post.publish_date).toLocaleDateString('en-US') : ''

    useEffect(() => {
        api.get(`/api/post/read/${slug}/`).then((res) => {
            console.log(res.data);
            setPost(res.data[0]);
        }).catch((err) => {
            // alert(err);
            console.log(`Slug is not working.  Slug = ${slug}`)
            console.log(err);
            navigate('/');
        });
    }, [slug, navigate]);

    return <div>
        <h1>{post.title}</h1>
        <h3>{post.subtitle}</h3>
        {post.published ? <p>Published on {formattedPublishedDate}</p> : <p>Created on {formattedCreatedDate}</p>}
        {post.created_at !== post.updated_at || (post.publish_date && post.publish_date !== post.updated_at) ? <p>Updated on {formattedUpdateDate}</p> : null}
        <p>{post.content}</p>
        <a href='/'>Return to list of posts</a>
    </div>
}

export default OnePost;