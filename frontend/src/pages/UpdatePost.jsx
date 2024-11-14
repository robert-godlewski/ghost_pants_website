import {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import api from '../api';

function UpdatePost() {
    const {slug} = useParams();
    // Need to split this out instead - Review Post Models in the API backend
    // const [post, setPost] = useState({});
    // const [id, setId] = useState(-1);
    const [title, setTitle] = useState("");
    const [subtitle, setSubTitle] = useState("");
    // Might need to fix the slug here
    const [content, setContent] = useState("");
    const [created_at, setCreatedAt] = useState("");
    const [updated_at, setUpdatedAt] = useState("");
    // const [publish_date, setPublishDate] = useState("");
    // const [published, setPublished] = useState(false);
    // Might need author and categories as well

    const navigate = useNavigate();
    const formattedCreatedDate = new Date(created_at).toLocaleDateString('en-US');
    const formattedUpdateDate = new Date(updated_at).toLocaleDateString('en-US');
    // const formattedPublishedDate = publish_date ? new Date(publish_date).toLocaleDateString('en-US') : ''

    useEffect(() => {
        api.get(`/api/post/read/${slug}/`).then((res) => {
            // console.log(res.data);
            // setPost(res.data[0]);
            // setId(res.data[0].id);
            setTitle(res.data[0].title);
            setSubTitle(res.data[0].subtitle);
            // Need to add in slug to update if title and subtitle changes
            setContent(res.data[0].content);
            setCreatedAt(res.data[0].created_at);
            setUpdatedAt(res.data[0].updated_at);
            // setPublishDate(res.data[0].publish_date);
            // setPublished(res.data[0].published);
        }).catch((err) => {
            // alert(err);
            console.log(`Slug is not working.  Slug = ${slug}`)
            console.log(err);
            navigate('/');
        });
    }, [slug, navigate]);

    const slugify = (str) => {
        str = str.toLowerCase();
        str = str.replace(/[^a-z0-9]/g, " ");
        str = str.replace(/\s+/g, '-');
        return str;
    };

    const updatePost = (e) => {
        // Backend is working but not sure why it says that the update fails
        e.preventDefault();
        let data = {
            "title": title,
            "subtitle": subtitle,
            "content": content,
            "updated_at": updated_at,
            // "publish_date": publish_date,
            // "published": published
        }
        console.log(`Data updating = ${data}`)
        let temp_slug = slugify(title);
        if (subtitle.length > 0) {
            temp_slug += '-' + slugify(subtitle)
        }
        if (slug !== temp_slug) {
            data["slug"] = temp_slug;
        }
        api.put(`/api/post/update/${slug}/`, data /*{
            title, 
            subtitle, 
            content, 
            updated_at, 
            publish_date, 
            published
        }*/).then((res) => {
            // let msg = '';
            // if (res.status === 201) {
            //     msg = 'Updated';
            // } else {
            //     msg = 'Failed to update';
            // }
            // alert(`${msg} post`);
            // console.log(`${msg} post = ${data}`);
            console.log(`Updated post = ${data}`)
            console.log(res.data)
            navigate('/');
        }).catch((err) => {
            // alert(err);
            console.log(err);
            // console.log(err.response.data);
        });
    };

    // Replace this with a form instead with post data here from the api
    return <form onSubmit={updatePost}>
        <h2>Edit Post</h2>
        <p>Initially created at: {formattedCreatedDate}</p>
        <p>Recently updated at: {formattedUpdateDate}</p>
        {/*published ? <p>Initially published on: {formattedPublishedDate}</p> : <p>This post has not been published yet.</p>*/}
        {/* <p>Post id = {id}</p> */}
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
        {/* <div>
            <label>Publish Date:</label>
            <input
                type='datetime-local'
                value={publish_date}
                onChange={(e) => setPublishDate(e.target.value)}
            />
        </div> */}
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