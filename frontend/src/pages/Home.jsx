import {useState, useEffect} from 'react';
import api from '../api';
// import Note from '../components/Note';
import CategoryPreview from '../components/CategoryPreview';

// Style sheets
import '../styles/Home.css'

function Home() {
    // remove the notes details here
    // const [notes, setNotes] = useState([]);
    // const [content, setContent] = useState('');
    // const [title, setTitle] = useState('');
    // Categories
    const [categories, setCategories] = useState([]);
    const [title, setTitle] = useState('');

    // Need a way to select a category to sort through all the posts for the selected category

    useEffect(() => {
        // getNotes();
        getCategories();
    }, []);

    // const getNotes = () => {
    //     api
    //         .get('/api/notes/')
    //         .then((res) => res.data)
    //         .then((data) => setNotes(data))
    //         .catch((err) => alert(err));
    // };

    const getCategories = () => {
        api
            .get('/api/category/')
            .then((res) => res.data)
            .then((data) => setCategories(data))
            .catch((err) => {
                alert(err);
                console.log(err);
            });
    };

    // const deleteNote = (id) => {
    //     api.delete(`/api/notes/delete/${id}/`).then((res) => {
    //         if (res.status === 204) alert('Note deleted!');
    //         else alert('Failed to delete note.');
    //         getNotes();
    //     }).catch((error) => alert(error));
    // };

    // This isn't working for some reason
    // const deleteCategory = (slug) => {
    //     api.delete(`/api/category/delete/${slug}/`).then((res) => {
    //         let msg = '';
    //         if (res.status === 204) {
    //             msg = 'Category deleted!';
    //         } else {
    //             msg = 'Failed to delete the category.';
    //         }
    //         alert(msg);
    //         console.log(msg);
    //         getCategories();
    //     }).catch((err) => {
    //         alert(err);
    //         console.log(err);
    //     });
    // };

    // const createNote = (e) => {
    //     e.preventDefault();
    //     api.post('/api/notes/', {content, title}).then((res) => {
    //         if (res.status === 201) alert('Note created!');
    //         else alert('Failed to make note.');
    //         getNotes();
    //     }).catch((err) => alert(err));
    // };

    const createCategory = (e) => {
        e.preventDefault();
        api.post('/api/category/create/', {title}).then((res) => {
            let msg = '';
            if (res.status === 201) {
                msg = 'Category Created!';
            } else {
                msg = 'Failed to create a new Category!'
            }
            alert(msg);
            console.log(msg);
            getCategories();
        }).catch((err) => {
            alert(err);
            console.log(err);
        });
    };

    return <div>
        <a href='/logout'>Logout</a>
        <div>
            <h2>Categories</h2>
            {
                categories.map((category) => {
                    // return <CategoryPreview category={category} onDelete={deleteCategory(category.slug)} key={category.id}/> - not working
                    return <CategoryPreview category={category} key={category.id}/>
                })
            }
            {categories.length === 0 ? <p>There are no categories to search through right now.</p> : null}
        </div>
        <div>
            <h3>Create a New Category</h3>
            <form onSubmit={createCategory}>
                <label htmlFor='title'>Title:</label>
                <input
                    type='text'
                    id='title'
                    name='title'
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <input type='submit' value='Submit' />
            </form>
        </div>
        {/* Add in the post views here */}
        <div>
            <h2>Posts</h2>
            <p>There are currently no posts available right now.</p>
        </div>
        {/* Remove below */}
        {/* <div>
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
        </form> */}
    </div>;
}

export default Home;