import {Link} from 'react-router-dom'
// Write your JS code here
const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogDetails
  return (
    <Link to={`/blogs/${id}/`}>
      <img src={imageUrl} alt="image1" />
      <p>{topic}</p>
      <h1>{title}</h1>
      <img src={avatarUrl} alt="image2" />
      <p>{author}</p>
    </Link>
  )
}
export default BlogItem
