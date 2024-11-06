import {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import api from '../api';

function UpdatePost() {
    const {slug} = useParams();
    // Need to split this out instead - Review Post Models in the API backend
    const [post, setPost] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        api.get(`/api/post/read/${slug}/`).then((res) => {
            console.log(res.data);
            setPost(res.data[0])
        }).catch((err) => {
            // alert(err);
            console.log(`Slug is not working.  Slug = ${slug}`)
            console.log(err);
            navigate('/');
        });
    }, [slug, navigate]);

    // Will need this function later
    // const updatePost = (e) => {};

    // Replace this with a form instead with post data here from the api
    return <div>
        <h1>Edit Post</h1>
        <p>{post.title}</p>
        <a href="/">Cancel</a>
    </div>
}

export default UpdatePost;