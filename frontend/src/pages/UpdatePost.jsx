import {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import api from '../api';

function UpdatePost() {
    const {slug} = useParams();
    // Need to split this out instead - Review Post Models in the API backend
    // const [post, setPost] = useState({});
    const [title, setTitle] = useState("");
    const [subtitle, setSubTitle] = useState("");
    // Might need to fix the slug
    const [content, setContent] = useState("");
    const [created_at, setCreatedAt] = useState("");
    const [updated_at, setUpdatedAt] = useState("");
    const [publish_date, setPublishDate] = useState("");
    const [published, setPublished] = useState(false);
    // Might need author and categories as well

    const navigate = useNavigate();
    const formattedCreatedDate = new Date(created_at).toLocaleDateString('en-US');
    const formattedUpdateDate = new Date(updated_at).toLocaleDateString('en-US');
    const formattedPublishedDate = publish_date ? new Date(publish_date).toLocaleDateString('en-US') : ''

    useEffect(() => {
        api.get(`/api/post/read/${slug}/`).then((res) => {
            console.log(res.data);
            // setPost(res.data[0]);
            setTitle(res.data[0].title);
            setSubTitle(res.data[0].subtitle);
            setContent(res.data[0].content);
            setCreatedAt(res.data[0].created_at);
            setUpdatedAt(res.data[0].updated_at);
            setPublishDate(res.data[0].publish_date);
            setPublished(res.data[0].published);
        }).catch((err) => {
            // alert(err);
            console.log(`Slug is not working.  Slug = ${slug}`)
            console.log(err);
            navigate('/');
        });
    }, [slug, navigate]);

    const updatePost = (e) => {
        e.preventDefault();
        api.put(`/api/post/update/${slug}/`, {
            title, 
            subtitle, 
            content, 
            updated_at, 
            publish_date, 
            published
        }).then((res) => {
            let msg = '';
            if (res.status === 201) {
                msg = 'Updated';
            } else {
                msg = 'Failed to update';
            }
            alert(`${msg} post`);
            console.log(`${msg} post = {title: ${title}, subtitle: ${subtitle}, ...}`);
            navigate('/');
        }).catch((err) => {
            alert(err);
            console.log(err);
            console.log(err.response.data);
        });
    };

    // Replace this with a form instead with post data here from the api
    return <form onSubmit={updatePost}>
        <h2>Edit Post</h2>
        <p>Initially created at: {formattedCreatedDate}</p>
        <p>Recently updated at: {formattedUpdateDate}</p>
        {published ? <p>Initially published on: {formattedPublishedDate}</p> : <p>This post has not been published yet.</p>}
        <div>
            <label>Title:</label>
            <input
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </div>
        <div>
            <label>Subtitle:</label>
            <input
                type='text'
                value={subtitle}
                onChange={(e) => setSubTitle(e.target.value)}
            />
        </div>
        {/* Need to add in a Datetime input field here */}
        <div>
            <label>Publish Date:</label>
            <input
                type='datetime-local'
                value={publish_date}
                onChange={(e) => setPublishDate(e.target.value)}
            />
        </div>
        <div>
            {/* Maybe add in a domument editor here */}
            <label>Content here:</label>
            <textarea 
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
        </div>
        <button type='submit'>Update Post</button>
        <a href="/">Cancel</a>
    </form>
}

export default UpdatePost;