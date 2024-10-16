import {useState, useEffect} from 'react';
//import {useParams} from 'react-router-dom';
import api from '../api';

import CategoryPreview from './CategoryPreview';

//function CatPosts(props) {
function CatPosts() {
    // This is for a specific category to sort through the posts - fix this
    // const {category_slug} = useParams();
    // categoryList is the list of all of the categories
    const [categories, setCategories] = useState([]);
    // category is only the selected category -> using category_slug
    // const [category, setCategory] = useState('');
    // need to sort throught the posts here...

    useEffect(() => {
        getCategory();
    }, []);

    const getCategory = () => {
        api
            .get('/api/category/')
            .then((res) => res.data)
            .then((data) => setCategories(data))
            .catch((err) => {
                alert(err);
                console.log(err);
            });
    };

    return <div>
        <div>
            <h2>Categories</h2>
            {
                categories.map((category) => {
                    return <CategoryPreview category={category} key={category.id}/>
                })
            }
            {categories.length === 0 ? <p>There are no categories to search through right now.</p> : null}
        </div>
        <div>
            <h2>Posts</h2>
            {/* Need to add in the posts based off of search here */}
            <p>There are no posts available right now.</p>
        </div>
    </div>;
}

export default CatPosts;