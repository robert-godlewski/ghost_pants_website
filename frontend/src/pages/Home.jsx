/* eslint-disable react/prop-types */
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import api from '../api';

// Components
import Note from '../components/Note';

// Style sheets
import '../styles/Home.css';

function Home() {
    // Notes - Remove these
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    // Need to add in categories
    // Posts
    // This is just all of the draft posts that the user can edit
    // eslint-disable-next-line react/prop-types
    // const {draftPosts, setDraftPosts} = props;
    // This is all of the published posts
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getNotes();
        // getDraftPosts();
        getPosts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getNotes = () => {
        api
            .get('/api/notes/')
            .then((res) => res.data)
            .then((data) => setNotes(data))
            .catch((err) => alert(err));
    };

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
            .then((res) => res.data)
            .then((data) => setPosts(data))
            .catch((err) => {
                alert(err);
                console.log(err);
            });
    };

    const deleteNote = (id) => {
        api.delete(`/api/notes/delete/${id}/`).then((res) => {
            if (res.status === 204) alert('Note deleted!');
            else alert('Failed to delete note.');
            getNotes();
        }).catch((error) => alert(error));
    };

    const createNote = (e) => {
        e.preventDefault();
        api.post('/api/notes/', {content, title}).then((res) => {
            if (res.status === 201) alert('Note created!');
            else alert('Failed to make note.');
            getNotes();
        }).catch((err) => alert(err));
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
                        <Link to={`/post/read/${post.slug}/`}>Read</Link>
                    </div>
                })
            }
            {posts.length === 0 ? <p>There are no posts available right now.</p> : null}
        </div>
        {/* Remove below */}
        <div>
            <h2>Notes</h2>
            {
                notes.map((note) => {
                    return <Note note={note} onDelete={deleteNote} key={note.id}/>
                })
            }
        </div>
        <h2>Create a Note</h2>
        <form onSubmit={createNote}>
            <label htmlFor='title'>Title:</label>
            <input
                type='text'
                id='title'
                name='title'
                required
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <label htmlFor='content'>Content:</label>
            <textarea
                id='content'
                name='content'
                required
                onChange={(e) => setContent(e.target.value)}
                value={content}
            />
            <input type='submit' value='Submit' />
        </form>
    </div>
}

export default Home;