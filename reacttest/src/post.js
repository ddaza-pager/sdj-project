import './Post.css'

const Post = ({ image, title, date }) => {
  const finalDate = Date.parse(date);
  return (<div className="post">
    <div className="image-container">
      <img src={image} />
    </div>
    <div className="content">
      <div className="title">{title}</div>
      <div className="date">{Number.isNaN(finalDate) ? "invalid date" : date}</div>
    </div>
  </div>)
}
export { Post }