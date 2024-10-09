/* eslint-disable react/prop-types */
function PostPreview({post}) {
    const formattedPubDate = new Date(post.publish_date).toLocaleDateString('en-US');

    return <div>
        <p>{post.title}</p>
        <p>{post.subtitle}</p>
        <p>{formattedPubDate}</p>
        {/* Need to add in a button to preview the post */}
    </div>
}

export default PostPreview;