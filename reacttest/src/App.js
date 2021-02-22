import logo from './logo.svg';
import './App.css';
import { Post } from './post'

const posts = [{ image: "./post-image.png", title: "Title", date: "02/02/2021" }, { image: "https://d3hnfqimznafg0.cloudfront.net/images/news/ImageForNews_26919_15786618897301054.png", title: "Title2", date: "Date2" }]
function App() {
  return (
    <div className="App">
      
      {posts.map(({ image, title, date }) => {
        return <Post image={image} title={title} date={date}></Post>

      })}
    </div>


  );
}

export default App;
