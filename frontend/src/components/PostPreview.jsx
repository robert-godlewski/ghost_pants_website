/* eslint-disable react/prop-types */
function PostPreview({post, auth}) {
    const formattedPubDate = new Date(post.publish_date).toLocaleDateString('en-US');

    return <div>
        <p>{post.title}</p>
        <p>{post.subtitle}</p>
        <p>{formattedPubDate}</p>
        {/* Need to add in a button and a function to look at the full post */}
        {/* Fix this below */}
        {auth === true ? <p>***need to add in an update and delete buttons here***</p> : null}
    </div>
}

export default PostPreview;