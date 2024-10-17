// Only used when the user is authenticated
/* eslint-disable react/prop-types */
// function CategoryPreview({category, onDelete}) { ***onDelete is not working***
function CategoryPreview({category}) {
    return <div>
        <p>{category.title}</p>
        {console.log(`Category Slug = ${category.slug}`)}
        {/* <button onClick={() => onDelete(category.slug)}>Delete</button> */}
    </div>
}

export default CategoryPreview;