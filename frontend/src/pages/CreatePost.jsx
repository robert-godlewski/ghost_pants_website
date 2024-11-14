import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import api from '../api';

function CreatePost() {
    const [title, setTitle] = useState('');
    const [subtitle, setSubTitle] = useState('');
    const [content, setContent] = useState('');
    // Need to add in the other necessary variables here

    const navigate = useNavigate();

    const createPost = (e) => {
        e.preventDefault();
        api.post('/api/post/create/', {title, subtitle, content}).then((res) => {
            let msg = '';
            if (res.status === 201) {
                msg = 'Created';
            } else {
                msg = 'Failed to create';
            }
            console.log(`${msg} post = {${title}, ${subtitle}, ...`);
            navigate('/');
        }).catch((err) => {
            console.log(err);
            console.log(err.response.data);
        });
    };

    return <form onSubmit={createPost}>
        <h2>Create Post</h2>
        <div>
            <label>Title:</label>
            <input
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Title'
            />
        </div>
        <div>
            <label>Subtitle:</label>
            <input
                type='text'
                value={subtitle}
                onChange={(e) => setSubTitle(e.target.value)}
                placeholder='Subtitle'
            />
        </div>
        <div>
            {/* Maybe add in a domument editor here */}
            <label>Content here:</label>
            <textarea 
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder='Text here ...'
            />
        </div>
        <button type='submit'>Draft Post</button>
        <a href="/">Cancel</a>
    </form>
}

export default CreatePost;