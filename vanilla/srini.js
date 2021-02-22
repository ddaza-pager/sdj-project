const container = document.querySelector(".container");
const postForm = document.querySelector("#post-form");
const posts = [{ image: "./assets/post-image.png", title: "Title", date: "02/02/2021" }, { image: "https://d3hnfqimznafg0.cloudfront.net/images/news/ImageForNews_26919_15786618897301054.png", title: "Title2", date: "Date2" }]

function render (){
  container.innerHTML='';
  posts.forEach((post) => {
    const element = document.createElement("div")
    element.innerHTML = postComponent(post);
    container.appendChild(element);
  })
}
postForm.addEventListener("submit", event=>{
  console.log('Submiting my form')
  event.preventDefault()
  const formData = new FormData(postForm);
 const image = formData.get('image');
 const title = formData.get('title');
 const date = formData.get('date');
 posts.push({
   image, title, date
 })
 render()
 console.log(posts)
})
console.log(container);

const postComponent = ({ image, title, date }) => {
  const finalDate = Date.parse(date);
  return `<div class="post">
  <div class="image-container">
    <img src="${image}" />
  </div>
  <div class="content">
    <div class="title">${title}</div>
    <div class="date">${Number.isNaN(finalDate) ? "invalid date" : date}</div>
  </div>
  </div>`
}
//container.innerHTML = post({ image: "./assets/post-image.png", title: "Title", date: "Date" });

//const posts = [{ image: "./assets/post-image.png", title: "Title", date: "02/02/2021" }, { image: "https://d3hnfqimznafg0.cloudfront.net/images/news/ImageForNews_26919_15786618897301054.png", title: "Title2", date: "Date2" }]
//container.innerHTML = "";
render()