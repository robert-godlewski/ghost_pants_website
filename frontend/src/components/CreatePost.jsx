import {useState} from 'react';
import api from "../api";


/* eslint-disable react/prop-types */
function CreatePostForm() {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    // const [slug, setSlug] = useState('');
    const [content, setContent] = useState(''); // Need to fix this to make a text box instead
    //const [created_at, setCreatedAt] = useState(''); // Might need to use some special formating for dates here

    // Might not need this
    // const createSlug = () => {
    //     if (title !== '') {
    //         if (subtitle !== '') {
    //             setSlug(title+'-'+subtitle);
    //         } else {
    //             setSlug(title);
    //         }
    //     }
    //     console.log(`Slug = ${slug}`);
    // };

    const createPost = (e) => {
        e.preventDefault();
        // createSlug();
        api
            .post('/api/post/create/', {
                title, 
                subtitle, 
                // slug, 
                content
            })
            .then((res) => {
                let msg = '';
                if (res.status === 201) {
                    msg = 'Post Created!'
                } else {
                    msg = 'Failed to create post!'
                }
                // alert(msg);
                console.log(msg);
            })
            .catch((err) => {
                // alert(err);
                console.log(err);
            });
    };

    return <form onSubmit={createPost}>
        <h2>Create Post</h2>
        <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Title'
        />
        <input
            type='text'
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            placeholder='Subtitle'
        />
        {/* Might need to fix the content input so that it's a text editor instead */}
        <input
            type='text'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder='Information here...'
        />
        <button type='submit'>Draft Post</button>
    </form>
}

export default CreatePostForm;