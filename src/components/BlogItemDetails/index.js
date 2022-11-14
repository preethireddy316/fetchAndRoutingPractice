/* eslint-disable react/no-typos */
/* eslint-disable react/sort-comp */
// Write your JS code here
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {Component} from 'react'

class BlogItemDetails extends Component {
  state = {
    blogDetailsObj: {},
    isLoading: true,
  }

  ComponentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const obj = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }
    this.setState({blogDetailsObj: obj, isLoading: false})
  }

  loadingView = () => (
    <div>
      <Loader
        type="TailSpin"
        testid="loader"
        color="#00BFFF"
        height={50}
        width={50}
      />
    </div>
  )

  blogView = () => {
    const {blogDetailsObj} = this.state
    const {title, avatarUrl, author, imageUrl, content} = blogDetailsObj
    return (
      <div>
        <h1>{title}</h1>
        <div>
          <img src={avatarUrl} alt="image1" />
          <p>{author}</p>
        </div>
        <img src={imageUrl} alt={title} />
        <p>{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return <div>{isLoading ? this.loadingView() : this.blogView()}</div>
  }
}

export default BlogItemDetails
