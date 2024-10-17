import {useState, useEffect} from 'react';
import api from '../api';
//import CategoryPreview from '../components/CategoryPreview';

function Landing() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories();
    }, []);

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

    const categoryPreview = (category) => {
        return <span>{category.title}</span>
    };

    return <div>
        {/* Add in welcoming information here */}
        <div>
            <a href="/register">Need to make an account?</a>
            <a href="/login">Loging into an existing account.</a>
        </div>
        <div>
            <h2>Categories</h2>
            {
                categories.map((category) => {
                    return categoryPreview(category)
                })
            }
            {categories.length === 0 ? <p>There are no categories to search through right now.</p> : null}
        </div>
        {/* Add in the post views here */}
        <div>
            <h2>Posts</h2>
            <p>There are currently no posts available right now.</p>
        </div>
    </div>
}

export default Landing;