// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogList extends Component {
  state = {
    blogsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogList()
  }

  getBlogList = async () => {
    const url = 'https://apis.ccbp.in/blogs'
    const response = await fetch(url)
    const data = await response.json()
    const list = data.map(each => ({
      id: each.id,
      title: each.title,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      author: each.author,
      topic: each.topic,
    }))
    this.setState({blogsList: list, isLoading: false})
  }

  renderLoadingView = () => (
    // eslint-disable-next-line react/no-unknown-property
    <div testid="loader">
      <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
    </div>
  )

  renderBlogsView = () => {
    const {blogsList} = this.state
    return (
      <ul>
        {blogsList.map(each => (
          <BlogItem key={each.id} blogDetails={each} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>{isLoading ? this.renderLoadingView() : this.renderBlogsView()}</div>
    )
  }
}

export default BlogList
